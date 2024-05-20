import { RandomUtils } from '../../../../test/mother/random.utils';
import { BusinessLocationCreate } from '../../interface/business-location.create.interface';

export class BusinessLocationCreateMother {
  getRandom(partial?: Partial<BusinessLocationCreate>): BusinessLocationCreate {
    return {
      businessId: RandomUtils.randomUuid(),
      locationId: RandomUtils.randomUuid(),
    };
  }
}
