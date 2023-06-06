import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';

import { UpdateUsersDto } from './dto/update-users.dto';

@ApiBearerAuth()
@ApiTags('users')

@Controller('users')
export class UsersController {
  [x: string]: any;
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create Users' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createUsersDto: CreateUsersDto): Promise<Users> {
    createUsersDto.password = await this.usersService.hash(createUsersDto.password);
    return this.usersService.create(createUsersDto);
  }


  @Get()
  findAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Trouver un utilisateur' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Users,
  })

  findOne(@Param('id') id: string): Promise<Users> {
    return this.usersService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersDto: UpdateUsersDto): Promise<Users> {
    return this.usersService.update(id, updateUsersDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<Users> {
    return this.usersService.remove(id);
  }
}

