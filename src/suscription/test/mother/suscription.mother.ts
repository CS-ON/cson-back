import { SuscriptionType } from '../../enum/suscription.type.enum';
import { Suscription } from '../../interface/suscription.interface';
import { v4 } from 'uuid';

export class SuscriptionMother {
  getRandom(): Suscription {
    return {
      id: v4(),
      name: v4(),
      type: SuscriptionType.TRIAL,
      maxOffersMonth: 200,
      monthPrice: null,
    };
  }
}
