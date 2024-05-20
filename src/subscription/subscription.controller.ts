import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SubscriptionDto } from './dto/subscription.dto';
import { Subscription } from './interface/subscription.interface';
import { SubscriptionMother } from './test/mother/subscription.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Subscription')
@Controller({ path: 'subscriptions', version: '1' })
export class SubscriptionController {
  @ApiOkResponse({
    description: 'Subscription found',
    type: SubscriptionDto,
  })
  @ApiNotFoundResponse({
    description: 'Subscription not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<SubscriptionDto> {
    const foundSubscription: Subscription =
      new SubscriptionMother().getRandom();
    return new SubscriptionDto(foundSubscription);
  }

  @ApiOkResponse({
    description: 'Subscriptions found',
    type: SubscriptionDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No subscriptions found',
  })
  @Get()
  async find(): Promise<SubscriptionDto[]> {
    const foundSubscriptions: SubscriptionDto[] = [
      new SubscriptionDto(new SubscriptionMother().getRandom()),
      new SubscriptionDto(new SubscriptionMother().getRandom()),
      new SubscriptionDto(new SubscriptionMother().getRandom()),
    ];

    return foundSubscriptions;
  }
}
