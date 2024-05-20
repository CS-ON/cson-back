import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LocationDto } from './dto/location.dto';
import { Location } from './interface/location.interface';
import { LocationMother } from './test/mother/location.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Location')
@Controller({ path: 'location', version: '1' })
export class LocationController {
  @ApiOkResponse({
    description: 'Location found',
    type: LocationDto,
  })
  @ApiNotFoundResponse({
    description: 'Location not found',
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) _id: string): Promise<LocationDto> {
    const foundLocation: Location = new LocationMother().getRandom();
    return new LocationDto(foundLocation);
  }

  @ApiOkResponse({
    description: 'Locations found',
    type: LocationDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No locations found',
  })
  @Get()
  async find(): Promise<LocationDto[]> {
    const foundLocation: LocationDto[] = [
      new LocationDto(new LocationMother().getRandom()),
      new LocationDto(new LocationMother().getRandom()),
      new LocationDto(new LocationMother().getRandom()),
    ];

    return foundLocation;
  }
}
