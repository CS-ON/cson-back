import { Test, TestingModule } from '@nestjs/testing';
import { OfferBonusController } from '../offer-bonus.controller';

describe(OfferBonusController.name, () => {
  let controller: OfferBonusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferBonusController],
    }).compile();

    controller = module.get<OfferBonusController>(OfferBonusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
