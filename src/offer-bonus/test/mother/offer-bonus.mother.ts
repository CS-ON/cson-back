import { RandomUtils } from '../../../../test/mother/random.utils';
import { OfferBonus } from '../../interface/offer-bonus.interface';

export class OfferBonusMother {
  getRandom(partial?: Partial<OfferBonus>): OfferBonus {
    return {
      id: RandomUtils.randomUuid(),
      from: RandomUtils.randomDate(
        new Date(2020, 5, 10),
        new Date(2025, 12, 15),
      ),
      to: RandomUtils.randomDate(new Date(2020, 5, 10), new Date(2025, 12, 15)),
      bonusPoints: RandomUtils.randomNumber(20, 2000),
    };
  }
}
