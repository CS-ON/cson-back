import { ApiProperty } from '@nestjs/swagger';
import { Business } from '../interface/business.interface';
import { SubscriptionDto } from '../../subscription/dto/subscription.dto';
import { BusinessType } from '../enum/business.type.enum';

export class BusinessDto implements Business {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  cif: string;

  @ApiProperty()
  tlf: string;

  @ApiProperty({ enum: BusinessType, enumName: 'Business type' })
  type: BusinessType;

  @ApiProperty({ type: SubscriptionDto })
  subscription: SubscriptionDto;

  @ApiProperty({ isArray: true })
  images: string[];

  constructor(business: Business) {
    Object.assign(this, business);
  }

  toDomain(): Business {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      cif: this.cif,
      tlf: this.tlf,
      type: this.type,
      subscription: this.subscription.toDomain(),
      images: this.images,
    };
  }
}
