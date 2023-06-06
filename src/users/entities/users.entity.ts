import { ApiProperty } from '@nestjs/swagger';

export class Users {
  id(id: any) {
      throw new Error('Method not implemented.');
  }
  @ApiProperty({ example: 1, description: 'Nom utilisateur' })
  email: string;

  @ApiProperty({ example: 1, description: 'Nom utilisateur' })
  username: string;

  @ApiProperty({ example: 1, description: 'prénom' })
  first_name: string;

  @ApiProperty({ example: 1, description: 'prénom' })
  last_name: string;

  @ApiProperty({ example: 1, description: 'Mot de passe' })
  password: string;

  @ApiProperty({ example: 1, description: 'Qui êtes vous ?' })
  type: string;

  @ApiProperty({ example: 1, description: 'Votre mail est-il vérifié ?' })
  isEmailVerified: boolean;

  @ApiProperty({ example: 1, description: 'Qui êtes vous ?' })
  verificationToken?: string;

  @ApiProperty({ example: 1, description: 'Première connexion' })
  first_connexion: boolean;

  @ApiProperty({ example: 1, description: 'newsletter' })
  bool_newsletter: boolean;

  @ApiProperty({ example: 1, description: 'role' })
  role: string;

  @ApiProperty({ example: 1, description: 'Téléphone' })
  phone: string;

  @ApiProperty({ example: 1, description: 'prénom' })
  address: string;


}
