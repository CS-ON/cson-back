import { RandomUtils } from '../../../../test/mother/random.utils';
import { LeaderboardPeriod } from '../../enum/leaderboard.period.enum';
import { Leaderboard } from '../../interface/leaderboard.interface';

export class LeaderboardMother {
  getRandom(partial?: Partial<Leaderboard>): Leaderboard {
    return {
      id: RandomUtils.randomUuid(),
      businessId: RandomUtils.randomUuid(),
      date: RandomUtils.randomDate(
        new Date(2020, 5, 10),
        new Date(2025, 12, 15),
      ),
      period: RandomUtils.randomArrayElement(Object.values(LeaderboardPeriod)),
    };
  }
}
