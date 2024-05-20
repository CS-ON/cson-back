import { RandomUtils } from '../../../../test/mother/random.utils';
import { LevelExtraPointsType } from '../../enum/level.extra-points.type.enum';
import { Level } from '../../interface/level.interface';

export class LevelMother {
  getRandom(partial?: Partial<Level>): Level {
    const extraPointsType: LevelExtraPointsType =
      RandomUtils.randomArrayElement(Object.values(LevelExtraPointsType));
    const maxOfferPoints: number =
      extraPointsType === LevelExtraPointsType.PERCENTAGE ? 100 : 5000;

    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomString(30),
      description: RandomUtils.randomString(100),
      extraOfferPoints: RandomUtils.randomNumber(20, maxOfferPoints),
      extraPointsType,
    };
  }
}
