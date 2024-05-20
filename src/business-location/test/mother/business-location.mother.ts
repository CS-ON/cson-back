import { RandomUtils } from '../../../../test/mother/random.utils';
import { BusinessLocation } from '../../interface/business-location.interface';
import { LocationMother } from '../../../location/test/mother/location.mother';

export class BusinessLocationMother {
  getRandom(partial?: Partial<BusinessLocation>): BusinessLocation {
    return {
      id: RandomUtils.randomUuid(),
      businessId: RandomUtils.randomUuid(),
      location: new LocationMother().getRandom(),
    };
  }
}
