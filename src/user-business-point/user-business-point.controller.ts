import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserBusinessPointDto } from './dto/user-business-point.dto';
import { UserBusinessPoint } from './interface/user-business-point.interface';
import { UserBusinessPointMother } from './test/mother/user-business-point.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('User business point')
@Controller({ path: 'user-business-point', version: '1' })
export class UserBusinessPointController {
  @ApiOkResponse({
    description: 'User business point found',
    type: UserBusinessPointDto,
  })
  @ApiNotFoundResponse({
    description: 'User business point not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<UserBusinessPointDto> {
    const foundUserBusinessPoint: UserBusinessPoint =
      new UserBusinessPointMother().getRandom();
    return new UserBusinessPointDto(foundUserBusinessPoint);
  }

  @ApiOkResponse({
    description: 'User business point found',
    type: UserBusinessPointDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No user business point found',
  })
  @Get()
  async find(): Promise<UserBusinessPointDto[]> {
    const foundUserBusinessPoint: UserBusinessPointDto[] = [
      new UserBusinessPointDto(new UserBusinessPointMother().getRandom()),
      new UserBusinessPointDto(new UserBusinessPointMother().getRandom()),
      new UserBusinessPointDto(new UserBusinessPointMother().getRandom()),
    ];

    return foundUserBusinessPoint;
  }
}
