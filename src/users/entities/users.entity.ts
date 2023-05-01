import { ApiProperty } from '@nestjs/swagger';

export class Users {
  id(id: any) {
      throw new Error('Method not implemented.');
  }
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({ example: 1, description: 'Nom utilisateur' })
  username: string;

  @ApiProperty({ example: 1, description: 'Mot de passe' })
  password: string;

  @ApiProperty({ example: 1, description: 'Qui êtes vous ?' })
  type: string;

}
