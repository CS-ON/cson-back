import { RandomUtils } from '../../../../test/mother/random.utils';
import { SubscriptionType } from '../../enum/subscription.type.enum';
import { Subscription } from '../../interface/subscription.interface';

export class SubscriptionMother {
  getRandom(partial?: Partial<Subscription>): Subscription {
    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomString(25),
      type: RandomUtils.randomArrayElement(Object.values(SubscriptionType)),
      maxOffersMonth: RandomUtils.randomNumber(50, 200),
      monthPrice: RandomUtils.randomNumber(10, 500),
    };
  }
}
