import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { User } from './interface/user.interface';
import { UserMother } from './test/mother/user.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('User')
@Controller({ path: 'user', version: '1' })
export class UserController {
  @ApiOkResponse({
    description: 'User found',
    type: UserDto,
  })
  @ApiNotFoundResponse({
    description: 'User not found',
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) _id: string): Promise<UserDto> {
    const foundUser: User = new UserMother().getRandom();
    return new UserDto(foundUser);
  }

  @ApiOkResponse({
    description: 'Users found',
    type: UserDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No user found',
  })
  @Get()
  async find(): Promise<UserDto[]> {
    const foundUser: UserDto[] = [
      new UserDto(new UserMother().getRandom()),
      new UserDto(new UserMother().getRandom()),
      new UserDto(new UserMother().getRandom()),
    ];

    return foundUser;
  }
}
