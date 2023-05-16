import { Injectable, Dependencies, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  [x: string]: any;
  constructor(usersService: any, jwtService: any) {
    this.usersService = usersService;
    this.jwtService = jwtService;
  }

  hash(password: string): string {
    return bcrypt.hash(password, 10);
  }

  async signIn(email: string, pass: string) {
    const user = await this.usersService.findByemail(email);
    if (!await bcrypt.compare(pass ,user?.password)) {
      throw new UnauthorizedException();
    }
    const payload = { email: user.email, sub: user.userId };
    return {
      access_token: await this.jwtService.signAsync(payload),
      isEmailVerified: user.isEmailVerified,
      first_connexion: user.first_connexion,
      type : user.type,
    };
  }
}