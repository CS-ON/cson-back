import { Business } from '../../interface/business.interface';
import { RandomUtils } from '../../../../test/mother/random.utils';
import { BusinessType } from '../../enum/business.type.enum';
import { SubscriptionMother } from '../../../subscription/test/mother/subscription.mother';

export class BusinessMother {
  getRandom(): Business {
    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomBusinessName(),
      cif: RandomUtils.randomString(15),
      tlf: RandomUtils.randomNumber(600000000, 800000000).toString(),
      description: RandomUtils.randomString(200),
      type: RandomUtils.randomArrayElement(Object.values(BusinessType)),
      subscription: new SubscriptionMother().getRandom(),
      images: [
        RandomUtils.randomString(200),
        RandomUtils.randomString(200),
        RandomUtils.randomString(200),
      ],
    };
  }
}
