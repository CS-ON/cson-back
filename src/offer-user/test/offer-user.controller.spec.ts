import { Test, TestingModule } from '@nestjs/testing';
import { OfferUserController } from '../offer-user.controller';

describe(OfferUserController.name, () => {
  let controller: OfferUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OfferUserController],
    }).compile();

    controller = module.get<OfferUserController>(OfferUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
