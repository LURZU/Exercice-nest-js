import { Test, TestingModule } from '@nestjs/testing';
import { DonFinancierController } from './don_financier.controller';
import { DonFinancierService } from './don_financier.service';

describe('DonFinancierController', () => {
  let controller: DonFinancierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonFinancierController],
      providers: [DonFinancierService],
    }).compile();

    controller = module.get<DonFinancierController>(DonFinancierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
