import { Test, TestingModule } from '@nestjs/testing';
import { DonTempsController } from './don_temps.controller';
import { DonTempsService } from './don_temps.service';

describe('DonTempsController', () => {
  let controller: DonTempsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonTempsController],
      providers: [DonTempsService],
    }).compile();

    controller = module.get<DonTempsController>(DonTempsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
