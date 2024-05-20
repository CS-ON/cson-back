import { Location } from '../../location/interface/location.interface';

export interface BusinessLocation {
  id: string;
  businessId: string;
  location: Location;
}
