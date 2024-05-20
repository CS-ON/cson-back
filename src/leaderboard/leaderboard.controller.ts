import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LeaderboardDto } from './dto/leaderboard.dto';
import { Leaderboard } from './interface/leaderboard.interface';
import { LeaderboardMother } from './test/mother/leaderboard.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Leaderboard')
@Controller({ path: 'leaderboard', version: '1' })
export class LeaderboardController {
  @ApiOkResponse({
    description: 'Leaderboard found',
    type: LeaderboardDto,
  })
  @ApiNotFoundResponse({
    description: 'Leaderboard not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<LeaderboardDto> {
    const foundLeaderboard: Leaderboard = new LeaderboardMother().getRandom();
    return new LeaderboardDto(foundLeaderboard);
  }

  @ApiOkResponse({
    description: 'Leaderboards found',
    type: LeaderboardDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No leaderboard found',
  })
  @Get()
  async find(): Promise<LeaderboardDto[]> {
    const foundLeaderboard: LeaderboardDto[] = [
      new LeaderboardDto(new LeaderboardMother().getRandom()),
      new LeaderboardDto(new LeaderboardMother().getRandom()),
      new LeaderboardDto(new LeaderboardMother().getRandom()),
    ];

    return foundLeaderboard;
  }
}
