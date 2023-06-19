import { ApiProperty } from '@nestjs/swagger';

//Ce bout de code est utilisé dans l'application NestJS pour définir une classe Association. 
//Cette classe représente une association et contient des propriétés.

export class Association {

  @ApiProperty({ example: 'W123456789', description: 'The unique rna number'})
  rna: string;

  @ApiProperty({ example: 'Secour Populaire', description: 'The name of the association'})
  name: string;

  @ApiProperty({example: '12 rue bidon', description: 'The adresse of the association'})
  adresse: string;

  @ApiProperty({example: 'Montpellier', description: 'The town of the association'})
  town: string;

  @ApiProperty({example: '34000', description: 'The postcode of the association'})
  postcode: string;

  @ApiProperty({example: '6.78958,49.05656', description: 'The coordinate of the association'})
  coordinate: string;

  @ApiProperty({ example: '0468445484', description: 'The phone number of the association' })
  phone: string;

  @ApiProperty({example: 'Humanitaire', description: 'The type of the association'})
  type: string;

  @ApiProperty({example: 'Id user de l\'association', description: 'User id of the association'})
  user_id: string;
}
