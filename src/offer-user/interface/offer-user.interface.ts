import { OfferUserStatus } from '../enum/offer-user.status.enum';
import { Offer } from '../../offer/interface/offer.interface';

export interface OfferUser {
  id: string;
  offer: Offer;
  userId: string;
  levelId: string;
  levelExtraPoints: number;
  status: OfferUserStatus;
}
