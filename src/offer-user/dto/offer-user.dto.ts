import { ApiProperty } from '@nestjs/swagger';
import { OfferDto } from '../../offer/dto/offer.dto';
import { OfferUserStatus } from '../enum/offer-user.status.enum';
import { OfferUser } from '../interface/offer-user.interface';

export class OfferUserDto implements OfferUser {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: OfferDto })
  offer: OfferDto;

  @ApiProperty({ name: 'user_id' })
  userId: string;

  @ApiProperty({ name: 'level_id' })
  levelId: string;

  @ApiProperty({ name: 'level_extra_points' })
  levelExtraPoints: number;

  @ApiProperty({ enum: OfferUserStatus })
  status: OfferUserStatus;

  constructor(offerUser: OfferUser) {
    Object.assign(this, offerUser);
  }

  toDomain(): OfferUser {
    return {
      id: this.id,
      offer: this.offer.toDomain(),
      userId: this.userId,
      levelId: this.levelId,
      levelExtraPoints: this.levelExtraPoints,
      status: this.status,
    };
  }
}
