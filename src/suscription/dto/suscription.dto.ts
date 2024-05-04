import { ApiProperty } from '@nestjs/swagger';
import { SuscriptionType } from '../enum/suscription.type.enum';
import { Suscription } from '../interface/suscription.interface';

export class SuscriptionDto implements Suscription {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  type: SuscriptionType;

  @ApiProperty()
  maxOffersMonth: number;

  @ApiProperty()
  monthPrice: number;

  constructor(suscription: Suscription) {
    Object.assign(this, suscription);
  }

  toDomain(): Suscription {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      maxOffersMonth: this.maxOffersMonth,
      monthPrice: this.monthPrice,
    };
  }
}
