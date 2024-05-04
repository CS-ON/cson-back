import { Test, TestingModule } from '@nestjs/testing';
import { CommerceUserController } from '../commerce-user.controller';

describe(CommerceUserController.name, () => {
  let controller: CommerceUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommerceUserController],
    }).compile();

    controller = module.get<CommerceUserController>(CommerceUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
