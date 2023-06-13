import { Test, TestingModule } from '@nestjs/testing';
import { DonMaterielController } from './don_materiel.controller';
import { DonMaterielService } from './don_materiel.service';

describe('DonMaterielController', () => {
  let controller: DonMaterielController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonMaterielController],
      providers: [DonMaterielService],
    }).compile();

    controller = module.get<DonMaterielController>(DonMaterielController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
