import { ApiProperty } from "@nestjs/swagger";

export class DonMateriel {
    @ApiProperty({ example: 'W123456789', description: 'Name object'})
    object_name: string;
  
  
    @ApiProperty({example: 'https:/dfijzfohzef', description: 'Lien vers le site de l\'association'})
    image_urls: string[];

    @ApiProperty({example: 'Id user de l\'association', description: 'User id of the association'})
    user_id: string;
  
    @ApiProperty({example: '34000', description: 'Date de création de l\'association'})
    created_at: Date;

    @ApiProperty({example: '34000', description: 'update date of the association'})
    update_at: Date;

}
