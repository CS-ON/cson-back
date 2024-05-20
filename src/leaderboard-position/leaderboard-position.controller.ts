import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LeaderboardPositionDto } from './dto/leaderboard-position.dto';
import { LeaderboardPosition } from './interface/leaderboard-position.interface';
import { LeaderboardPositionMother } from './test/mother/leaderboard-position.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Leaderboard position')
@Controller({ path: 'leaderboard-position', version: '1' })
export class LeaderboardPositionController {
  @ApiOkResponse({
    description: 'Leaderboard position found',
    type: LeaderboardPositionDto,
  })
  @ApiNotFoundResponse({
    description: 'Leaderboard position not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<LeaderboardPositionDto> {
    const foundLeaderboardPosition: LeaderboardPosition =
      new LeaderboardPositionMother().getRandom();
    return new LeaderboardPositionDto(foundLeaderboardPosition);
  }

  @ApiOkResponse({
    description: 'Leaderboard positions found',
    type: LeaderboardPositionDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No leaderboard positions found',
  })
  @Get()
  async find(): Promise<LeaderboardPositionDto[]> {
    const foundLeaderboardPosition: LeaderboardPositionDto[] = [
      new LeaderboardPositionDto(new LeaderboardPositionMother().getRandom()),
      new LeaderboardPositionDto(new LeaderboardPositionMother().getRandom()),
      new LeaderboardPositionDto(new LeaderboardPositionMother().getRandom()),
    ];

    return foundLeaderboardPosition;
  }
}
