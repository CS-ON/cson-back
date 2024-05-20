import { SubscriptionDto } from '../../dto/subscription.dto';
import { SubscriptionMother } from './subscription.mother';

export class SubscriptionDtoMother {
  getRandom(partial?: Partial<SubscriptionDto>): SubscriptionDto {
    return Object.assign(
      new SubscriptionDto(new SubscriptionMother().getRandom()),
      partial,
    );
  }
}
