import { ApiProperty } from '@nestjs/swagger';
import { OfferBonus } from '../interface/offer-bonus.interface';

export class OfferBonusDto implements OfferBonus {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: Date })
  from: Date;

  @ApiProperty({ type: Date })
  to: Date;

  @ApiProperty({ name: 'bonus_points' })
  bonusPoints: number;

  constructor(offerBonus: OfferBonus) {
    Object.assign(this, offerBonus);
  }

  toDomain(): OfferBonus {
    return {
      id: this.id,
      from: this.from,
      to: this.to,
      bonusPoints: this.bonusPoints,
    };
  }
}
