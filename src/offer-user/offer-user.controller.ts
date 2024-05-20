import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { OfferUserDto } from './dto/offer-user.dto';
import { OfferUser } from './interface/offer-user.interface';
import { OfferUserMother } from './test/mother/offer-user.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Offer user')
@Controller({ path: 'offer-user', version: '1' })
export class OfferUserController {
  @ApiOkResponse({
    description: 'Offer user found',
    type: OfferUserDto,
  })
  @ApiNotFoundResponse({
    description: 'Offer user not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<OfferUserDto> {
    const foundOfferUser: OfferUser = new OfferUserMother().getRandom();
    return new OfferUserDto(foundOfferUser);
  }

  @ApiOkResponse({
    description: 'Offer users found',
    type: OfferUserDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No offer user found',
  })
  @Get()
  async find(): Promise<OfferUserDto[]> {
    const foundOfferUser: OfferUserDto[] = [
      new OfferUserDto(new OfferUserMother().getRandom()),
      new OfferUserDto(new OfferUserMother().getRandom()),
      new OfferUserDto(new OfferUserMother().getRandom()),
    ];

    return foundOfferUser;
  }
}
