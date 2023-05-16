import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';

@Controller('verify')
export class VerificationController {
  constructor(private readonly userService: UsersService) {}

  @Get(':token')
  async verifyEmail(@Param('token') token: string, @Res() res: Response) {
    try {
      await this.userService.verifyEmail(token);
      return res.redirect('/verified'); // rediriger vers une page de confirmation
    } catch (err) {
      return res.status(400).send(err.message); // retourner une erreur si le jeton est invalide
    }
  }
}
