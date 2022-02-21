import { Test, TestingModule } from '@nestjs/testing';
import { SpendingsController } from './spendings.controller';
import { SpendingsService } from './spendings.service';

describe('SpendingsController', () => {
  let controller: SpendingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendingsController],
      providers: [SpendingsService],
    }).compile();

    controller = module.get<SpendingsController>(SpendingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
