import { RandomUtils } from '../../../../test/mother/random.utils';
import { OfferUserStatus } from '../../enum/offer-user.status.enum';
import { OfferUser } from '../../interface/offer-user.interface';
import { OfferMother } from '../../../offer/test/mother/offer.mother';

export class OfferUserMother {
  getRandom(partial?: Partial<OfferUser>): OfferUser {
    return {
      id: RandomUtils.randomUuid(),
      offer: new OfferMother().getRandom(),
      userId: RandomUtils.randomUuid(),
      levelId: RandomUtils.randomUuid(),
      levelExtraPoints: RandomUtils.randomNumber(20, 2000),
      status: RandomUtils.randomArrayElement(Object.values(OfferUserStatus)),
    };
  }
}
