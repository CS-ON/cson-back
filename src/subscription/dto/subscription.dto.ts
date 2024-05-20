import { ApiProperty } from '@nestjs/swagger';
import { SubscriptionType } from '../enum/subscription.type.enum';
import { Subscription } from '../interface/subscription.interface';

export class SubscriptionDto implements Subscription {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: SubscriptionType, enumName: 'Subscription type' })
  type: SubscriptionType;

  @ApiProperty({ name: 'max_offers_month' })
  maxOffersMonth: number;

  @ApiProperty({
    name: 'month_price',
    required: false,
  })
  monthPrice?: number;

  constructor(subscription: Subscription) {
    Object.assign(this, subscription);
  }

  toDomain(): Subscription {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      maxOffersMonth: this.maxOffersMonth,
      monthPrice: this.monthPrice,
    };
  }
}
