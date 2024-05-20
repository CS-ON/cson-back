import { Test, TestingModule } from '@nestjs/testing';
import { BusinessLocationController } from '../business-location.controller';

describe(BusinessLocationController.name, () => {
  let controller: BusinessLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessLocationController],
    }).compile();

    controller = module.get<BusinessLocationController>(
      BusinessLocationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
