import { BusinessType } from '../enum/business.type.enum';
import { Subscription } from '../../subscription/interface/subscription.interface';

export interface Business {
  id: string;
  name: string;
  description: string;
  cif: string;
  tlf: string;
  type: BusinessType;
  subscription: Subscription;
  images: string[];
}
