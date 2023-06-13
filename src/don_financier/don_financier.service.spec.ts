import { Test, TestingModule } from '@nestjs/testing';
import { DonFinancierService } from './don_financier.service';

describe('DonFinancierService', () => {
  let service: DonFinancierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonFinancierService],
    }).compile();

    service = module.get<DonFinancierService>(DonFinancierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
