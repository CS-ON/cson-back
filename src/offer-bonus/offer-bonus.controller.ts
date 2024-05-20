import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OfferBonusDto } from './dto/offer-bonus.dto';
import { OfferBonus } from './interface/offer-bonus.interface';
import { OfferBonusMother } from './test/mother/offer-bonus.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Offer bonus')
@Controller({ path: 'offer-bonus', version: '1' })
export class OfferBonusController {
  @ApiOkResponse({
    description: 'Offer bonus found',
    type: OfferBonusDto,
  })
  @ApiNotFoundResponse({
    description: 'Offer bonus not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<OfferBonusDto> {
    const foundOfferBonus: OfferBonus = new OfferBonusMother().getRandom();
    return new OfferBonusDto(foundOfferBonus);
  }

  @ApiOkResponse({
    description: 'Offer bonuss found',
    type: OfferBonusDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No offer bonus found',
  })
  @Get()
  async find(): Promise<OfferBonusDto[]> {
    const foundOfferBonus: OfferBonusDto[] = [
      new OfferBonusDto(new OfferBonusMother().getRandom()),
      new OfferBonusDto(new OfferBonusMother().getRandom()),
      new OfferBonusDto(new OfferBonusMother().getRandom()),
    ];

    return foundOfferBonus;
  }
}
