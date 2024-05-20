import { RandomUtils } from '../../../../test/mother/random.utils';
import { Location } from '../../interface/location.interface';

export class LocationMother {
  getRandom(partial?: Partial<Location>): Location {
    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomCity(),
      isoCountry: RandomUtils.randomCountryIso(),
      zipCode: RandomUtils.randomZipCode(),
    };
  }
}
