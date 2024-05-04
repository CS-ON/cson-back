import { SuscriptionDto } from '../../dto/suscription.dto';
import { SuscriptionMother } from './suscription.mother';

export class SuscriptionDtoMother {
  getRandom(): SuscriptionDto {
    return new SuscriptionDto(new SuscriptionMother().getRandom());
  }
}
