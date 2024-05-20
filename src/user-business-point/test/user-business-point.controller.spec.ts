import { Test, TestingModule } from '@nestjs/testing';
import { UserBusinessPointController } from '../user-business-point.controller';

describe(UserBusinessPointController.name, () => {
  let controller: UserBusinessPointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserBusinessPointController],
    }).compile();

    controller = module.get<UserBusinessPointController>(
      UserBusinessPointController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
