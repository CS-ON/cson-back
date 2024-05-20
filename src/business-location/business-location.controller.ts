import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BusinessLocationDto } from './dto/business-location.dto';
import { BusinessLocation } from './interface/business-location.interface';
import { BusinessLocationMother } from './test/mother/business-location.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Business location')
@Controller({ path: 'business-location', version: '1' })
export class BusinessLocationController {
  @ApiOkResponse({
    description: 'Business location found',
    type: BusinessLocationDto,
  })
  @ApiNotFoundResponse({
    description: 'Business location not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<BusinessLocationDto> {
    const foundBusinessLocation: BusinessLocation =
      new BusinessLocationMother().getRandom();
    return new BusinessLocationDto(foundBusinessLocation);
  }

  @ApiOkResponse({
    description: 'Business locations found',
    type: BusinessLocationDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No business locations found',
  })
  @Get()
  async find(): Promise<BusinessLocationDto[]> {
    const foundBusinessLocation: BusinessLocationDto[] = [
      new BusinessLocationDto(new BusinessLocationMother().getRandom()),
      new BusinessLocationDto(new BusinessLocationMother().getRandom()),
      new BusinessLocationDto(new BusinessLocationMother().getRandom()),
    ];

    return foundBusinessLocation;
  }
}
