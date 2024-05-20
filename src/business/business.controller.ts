import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BusinessDto } from './dto/business.dto';
import { Business } from './interface/business.interface';
import { BusinessMother } from './test/mother/business.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Business')
@Controller({ path: 'business', version: '1' })
export class BusinessController {
  @ApiOkResponse({
    description: 'Business found',
    type: BusinessDto,
  })
  @ApiNotFoundResponse({
    description: 'Business not found',
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) _id: string): Promise<BusinessDto> {
    const foundBusiness: Business = new BusinessMother().getRandom();
    return new BusinessDto(foundBusiness);
  }

  @ApiOkResponse({
    description: 'Businesss found',
    type: BusinessDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No business found',
  })
  @Get()
  async find(): Promise<BusinessDto[]> {
    const foundBusiness: BusinessDto[] = [
      new BusinessDto(new BusinessMother().getRandom()),
      new BusinessDto(new BusinessMother().getRandom()),
      new BusinessDto(new BusinessMother().getRandom()),
    ];

    return foundBusiness;
  }
}
