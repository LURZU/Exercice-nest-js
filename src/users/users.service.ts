import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { UpdateUsersDto } from './dto/update-users.dto';
import { Model } from 'mongoose';
import { Users } from './entities/users.entity';
import * as bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid'
import { MailerService } from '@nestjs-modules/mailer';


@Injectable()
export class UsersService {

    constructor(
        @Inject('USERS_MODEL')
        private userModel: Model<Users>,
        private readonly mailerService: MailerService      
        ) {}

    async findAll(): Promise<Users[]> {
    return Promise.resolve(this.userModel.find());
  }

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async generateVerificationCode(userId: string): Promise<string> {
    const code = uuid();
    // Register the verification code in the database
    await this.userModel.findByIdAndUpdate(userId, { verificationCode: code });
    return code;
  }

  async sendVerificationEmail(user: Users, verificationCode: string) {
    const url = `http://18.193.138.91:3000/verify/${verificationCode}`;
    const message = {
      name: 'Xepi',
      from: 'alt-int@studiodefacto.com',
      to: user.email,
      subject: 'Verify your email address',
      template: 'verification',
      text: 'Verify your email address : '+url,
      context: {
        name: user.email,
        url: url,
      },
    };
   
    await this.mailerService.sendMail(message);
  }
  

  async generateVerificationToken(): Promise<string> {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      token += chars[randomIndex];
    }
    return token;
  }

  async create(createUserDto: CreateUsersDto) {
    const { email } = createUserDto;
    // Vérifiez si l'utilisateur avec cet email existe déjà
    const existingUser = await this.userModel.findOne({ email }).exec();
    if (existingUser) {
      throw new HttpException('Cet e-mail est déjà enregistré.', HttpStatus.CONFLICT);
    }
  
    // Générer le token de vérification
    const verificationToken = await this.generateVerificationToken();
  
    // Créer l'utilisateur avec le token de vérification
    const user = new this.userModel({ ...createUserDto, verificationToken });
    await user.save();
  
    // Envoyer l'e-mail de vérification
    await this.sendVerificationEmail(user, verificationToken);
  
    return user;
  }
  
  

  async verifyEmail(token: string) {
    // Trouver l'utilisateur avec le jeton de vérification
    const user = await this.userModel.findOne({ verificationToken: token }).exec();
    if (!user) {
      throw new Error('Jeton de vérification invalide.');
    }


    // Marquer l'e-mail comme vérifié
    user.isEmailVerified = true;
    user.verificationToken = undefined;
    await user.save();
    return 'Votre adresse e-mail a été vérifiée avec succès. <br> Vous pouvez vous connecter à votre compte.';
  }

  async findById(id: string): Promise<Users> {
    return this.userModel.findById(id).exec();
  }

  async findByemail(name: string): Promise<Users> {
    return this.userModel.findOne({email : name}).exec();
  }

  async update(id: string, updateUsersDto: UpdateUsersDto): Promise<Users> {
    return  this.userModel.findByIdAndUpdate(id, updateUsersDto).exec();
  }

  async remove(id: string):  Promise<Users> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
