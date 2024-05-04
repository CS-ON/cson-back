import { Test, TestingModule } from '@nestjs/testing';
import { LeaderboardPositionController } from '../leaderboard-position.controller';

describe(LeaderboardPositionController.name, () => {
  let controller: LeaderboardPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeaderboardPositionController],
    }).compile();

    controller = module.get<LeaderboardPositionController>(
      LeaderboardPositionController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
