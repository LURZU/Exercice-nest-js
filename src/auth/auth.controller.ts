import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('don')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }
  
  @ApiOperation({ summary: 'Connect and return some value for front' })
  @Get('connect/:email/:password')
  async getKey(@Param('email') email: string, @Param('password') password: string) {
    return this.authService.signIn(email, password); 
  }
  



 
}