import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OfferDto } from './dto/offer.dto';
import { Offer } from './interface/offer.interface';
import { OfferMother } from './test/mother/offer.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Offer')
@Controller({ path: 'offer', version: '1' })
export class OfferController {
  @ApiOkResponse({
    description: 'Offer found',
    type: OfferDto,
  })
  @ApiNotFoundResponse({
    description: 'Offer not found',
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) _id: string): Promise<OfferDto> {
    const foundOffer: Offer = new OfferMother().getRandom();
    return new OfferDto(foundOffer);
  }

  @ApiOkResponse({
    description: 'Offers found',
    type: OfferDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No offer found',
  })
  @Get()
  async find(): Promise<OfferDto[]> {
    const foundOffer: OfferDto[] = [
      new OfferDto(new OfferMother().getRandom()),
      new OfferDto(new OfferMother().getRandom()),
      new OfferDto(new OfferMother().getRandom()),
    ];

    return foundOffer;
  }
}
