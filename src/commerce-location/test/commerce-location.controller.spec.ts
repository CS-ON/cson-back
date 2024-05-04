import { Test, TestingModule } from '@nestjs/testing';
import { CommerceLocationController } from '../commerce-location.controller';

describe(CommerceLocationController.name, () => {
  let controller: CommerceLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommerceLocationController],
    }).compile();

    controller = module.get<CommerceLocationController>(
      CommerceLocationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
