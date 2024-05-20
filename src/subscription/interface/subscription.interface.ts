import { SubscriptionType } from '../enum/subscription.type.enum';

export interface Subscription {
  id: string;
  name: string;
  type: SubscriptionType;
  maxOffersMonth: number;
  monthPrice?: number | null;
}
