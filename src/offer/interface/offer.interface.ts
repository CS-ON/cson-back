import { BusinessLocation } from '../../business-location/interface/business-location.interface';
import { OfferBonus } from '../../offer-bonus/interface/offer-bonus.interface';

export interface Offer {
  id: string;
  name: string;
  description: string;
  businessLocation: BusinessLocation;
  rewardPoints: number;
  expirationDate?: Date | null;
  bonus?: OfferBonus | null;
}
