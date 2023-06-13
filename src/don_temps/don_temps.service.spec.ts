import { Test, TestingModule } from '@nestjs/testing';
import { DonTempsService } from './don_temps.service';

describe('DonTempsService', () => {
  let service: DonTempsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonTempsService],
    }).compile();

    service = module.get<DonTempsService>(DonTempsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
