import { ApiProperty } from '@nestjs/swagger';

export class Users {
  /**
   * The name of the Cat
   * @example Kitty
   */
  username: string;

  @ApiProperty({ example: 1, description: 'Mot de passe' })
  password: string;

}
