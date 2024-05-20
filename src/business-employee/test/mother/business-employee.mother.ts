import { RandomUtils } from '../../../../test/mother/random.utils';
import { BusinessEmployee } from '../../interface/business-employee.interface';

export class BusinessEmployeeMother {
  getRandom(partial?: Partial<BusinessEmployee>): BusinessEmployee {
    return {
      id: RandomUtils.randomUuid(),
      businessId: RandomUtils.randomUuid(),
      name: RandomUtils.randomBusinessName(),
      email: RandomUtils.randomEmail(),
    };
  }
}
