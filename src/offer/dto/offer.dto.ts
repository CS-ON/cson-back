import { ApiProperty } from '@nestjs/swagger';
import { BusinessLocationDto } from '../../business-location/dto/business-location.dto';
import { OfferBonusDto } from '../../offer-bonus/dto/offer-bonus.dto';
import { Offer } from '../interface/offer.interface';

export class OfferDto implements Offer {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ name: 'business_location', type: BusinessLocationDto })
  businessLocation: BusinessLocationDto;

  @ApiProperty({ name: 'reward_points' })
  rewardPoints: number;

  @ApiProperty({ required: false, name: 'expiration_date', type: Date })
  expirationDate?: Date;

  @ApiProperty({ required: false, type: OfferBonusDto })
  bonus?: OfferBonusDto;

  constructor(offer: Offer) {
    Object.assign(this, offer);
  }

  toDomain(): Offer {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      businessLocation: this.businessLocation.toDomain(),
      rewardPoints: this.rewardPoints,
      expirationDate: this.expirationDate,
      bonus: this.bonus,
    };
  }
}
