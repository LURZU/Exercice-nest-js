import { Test, TestingModule } from '@nestjs/testing';
import { DonController } from './don.controller';
import { DonService } from './don.service';

describe('DonController', () => {
  let controller: DonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonController],
      providers: [DonService],
    }).compile();

    controller = module.get<DonController>(DonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
