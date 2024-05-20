import { ApiProperty } from '@nestjs/swagger';
import { LocationDto } from '../../location/dto/location.dto';
import { BusinessLocation } from '../interface/business-location.interface';

export class BusinessLocationDto implements BusinessLocation {
  @ApiProperty()
  id: string;

  @ApiProperty({ name: 'business_id' })
  businessId: string;

  @ApiProperty({ type: LocationDto })
  location: LocationDto;

  constructor(businessLocation: BusinessLocation) {
    Object.assign(this, businessLocation);
  }

  toDomain(): BusinessLocation {
    return {
      id: this.id,
      businessId: this.businessId,
      location: this.location.toDomain(),
    };
  }
}
