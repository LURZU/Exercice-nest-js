import { PartialType } from '@nestjs/swagger';
import { CreateCrudTestDto } from './create-crud-test.dto';

export class UpdateCrudTestDto extends PartialType(CreateCrudTestDto) {}
