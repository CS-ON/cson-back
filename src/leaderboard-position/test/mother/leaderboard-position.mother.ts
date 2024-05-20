import { RandomUtils } from '../../../../test/mother/random.utils';
import { LeaderboardPosition } from '../../interface/leaderboard-position.interface';

export class LeaderboardPositionMother {
  getRandom(partial?: Partial<LeaderboardPosition>): LeaderboardPosition {
    return {
      id: RandomUtils.randomUuid(),
      leaderboardId: RandomUtils.randomUuid(),
      user: {
        id: RandomUtils.randomUuid(),
        name: RandomUtils.randomUserName(),
      },
      position: RandomUtils.randomNumber(1, 10000),
    };
  }
}
