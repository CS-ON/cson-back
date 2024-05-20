import { RandomUtils } from '../../../../test/mother/random.utils';
import { User } from '../../interface/user.interface';

export class UserMother {
  getRandom(partial?: Partial<User>): User {
    return {
      id: RandomUtils.randomUuid(),
      name: RandomUtils.randomUserName(),
      email: RandomUtils.randomEmail(),
      tlf: RandomUtils.randomNumber(600000000, 800000000).toString(),
    };
  }
}
