import { Test, TestingModule } from '@nestjs/testing';
import { DonMaterielService } from './don_materiel.service';

describe('DonMaterielService', () => {
  let service: DonMaterielService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonMaterielService],
    }).compile();

    service = module.get<DonMaterielService>(DonMaterielService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
