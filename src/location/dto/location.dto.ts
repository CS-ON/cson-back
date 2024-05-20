import { ApiProperty } from '@nestjs/swagger';
import { Location } from '../interface/location.interface';

export class LocationDto implements Location {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ name: 'iso_country' })
  isoCountry: string;

  @ApiProperty({ name: 'zip_code' })
  zipCode: string;

  constructor(Location: Location) {
    Object.assign(this, Location);
  }

  toDomain(): Location {
    return {
      id: this.id,
      name: this.name,
      isoCountry: this.isoCountry,
      zipCode: this.zipCode,
    };
  }
}
