import { RandomUtils } from '../../../../test/mother/random.utils';
import { UserBusinessPoint } from '../../interface/user-business-point.interface';
import { LevelMother } from '../../../level/test/mother/level.mother';

export class UserBusinessPointMother {
  getRandom(partial?: Partial<UserBusinessPoint>): UserBusinessPoint {
    return {
      id: RandomUtils.randomUuid(),
      userId: RandomUtils.randomUuid(),
      businessId: RandomUtils.randomUuid(),
      level: new LevelMother().getRandom(),
      accumulatedPoints: RandomUtils.randomNumber(0, 10000),
    };
  }
}
