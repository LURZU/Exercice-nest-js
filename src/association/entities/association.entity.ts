import { ApiProperty } from '@nestjs/swagger';

export class Association {
  /**
   * The name of the Cat
   * @example Kitty
   */
  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  rna_number: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  name: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  adress: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  phone: string;

  @ApiProperty({ example: 1, description: 'The age of the Cat' })
  type: number;

  @ApiProperty({
    example: 'Resto du coeur',
    description: 'The breed of the Cat',
  })
  lat: string;
  lon: string;
}
