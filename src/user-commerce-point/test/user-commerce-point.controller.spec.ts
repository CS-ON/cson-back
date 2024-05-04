import { Test, TestingModule } from '@nestjs/testing';
import { UserCommercePointController } from '../user-commerce-point.controller';

describe(UserCommercePointController.name, () => {
  let controller: UserCommercePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCommercePointController],
    }).compile();

    controller = module.get<UserCommercePointController>(
      UserCommercePointController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
