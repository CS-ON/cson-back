import { RandomUtils } from '../../../../test/mother/random.utils';
import { Offer } from '../../interface/offer.interface';
import { BusinessLocationMother } from '../../../business-location/test/mother/business-location.mother';
import { OfferBonusMother } from '../../../offer-bonus/test/mother/offer-bonus.mother';

export class OfferMother {
  getRandom(partial?: Partial<Offer>): Offer {
    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomOfferName(),
      description: RandomUtils.randomString(200),
      businessLocation: new BusinessLocationMother().getRandom(),
      rewardPoints: RandomUtils.randomNumber(40, 1000),
      expirationDate: RandomUtils.randomBoolean()
        ? undefined
        : RandomUtils.randomDate(new Date(2020, 5, 10), new Date(2025, 12, 15)),
      bonus: RandomUtils.randomBoolean()
        ? undefined
        : new OfferBonusMother().getRandom(),
    };
  }
}
