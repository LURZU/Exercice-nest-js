import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { AnyObject, Document, DocumentSetOptions, Error, FlattenMaps, MergeType, Model, PathsToValidate, PopulateOptions, Query, QueryOptions, Require_id, SaveOptions, ToObjectOptions, UpdateQuery, UpdateWithAggregationPipeline, pathsToSkip } from 'mongoose';
import { Users } from './entities/users.entity';
import { getModelToken } from '@nestjs/mongoose';
import { CreateUsersDto } from './dto/create-users.dto';
import { MailerService } from '@nestjs-modules/mailer';

describe('UsersService', () => {
  let service: UsersService;
  let userModel: jest.Mocked<Model<Users>>; // Changé ici

  // Les données fictives pour tester
  const mockUser = {
    email: 'test@mail.com',
    isEmailVerified: false,
    save: jest.fn().mockResolvedValue(this),
  };

  // Mock du UserModel
  const userModelMock = {
    find: jest.fn().mockResolvedValue([mockUser]),
    findOne: jest.fn(),
  };

  // Mock du MailerService
  const mailerService = {
    sendMail: jest.fn().mockResolvedValue({}),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken('Users'),
          useValue: userModelMock,
        },
        {
          provide: MailerService,
          useValue: mailerService,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userModel = module.get<jest.Mocked<Model<Users>>>(getModelToken('Users')); // Changé ici
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = await service.findAll();
      expect(result).toEqual([mockUser]);
      expect(userModel.find).toHaveBeenCalled();
    });
  });

  describe('create', () => {
    it('should create a user', async () => {
      userModel.findOne.mockResolvedValueOnce(null);
      mockUser.save.mockResolvedValueOnce(mockUser);

      const userDto: CreateUsersDto = {
        email: 'test@mail.com',
        username: 'testusername',
        password: 'testpassword',
        type: 'testtype',
        isEmailVerified: false,
        phone: '123456789',
        adress: 'testadress',
        first_name: 'testfirstname',
        last_name: 'testlastname',
        bool_newsletter: false,
        first_connexion: false
       
      };

      const result = await service.create(userDto);

      expect(result).toEqual(mockUser);
      expect(mailerService.sendMail).toHaveBeenCalled();
    });

    it('should create a user', async () => {
      const userDto: CreateUsersDto = {
        email: 'test@mail.com',
        username: 'testusername',
        password: 'testpassword',
        type: 'testtype',
        isEmailVerified: false,
        phone: '123456789',
        adress: 'testadress',
        first_name: 'testfirstname',
        last_name: 'testlastname',
        bool_newsletter: false,
        first_connexion: false
      };
    
      userModel.findOne.mockResolvedValueOnce(null);
      userModel.create.mockResolvedValueOnce(userDto as any);
    
      const user = await service.create(userDto);
      expect(user).toEqual(userDto);
      expect(userModel.create).toBeCalledWith(userDto);
    });
    
  });


});
