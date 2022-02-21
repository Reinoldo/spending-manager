import { Test, TestingModule } from '@nestjs/testing';
import { SpendingsService } from './spendings.service';

describe('SpendingsService', () => {
  let service: SpendingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendingsService],
    }).compile();

    service = module.get<SpendingsService>(SpendingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
