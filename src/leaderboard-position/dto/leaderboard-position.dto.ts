import { ApiProperty } from '@nestjs/swagger';
import { LeaderboardPosition } from '../interface/leaderboard-position.interface';
import { LeaderboardPositionUserDto } from './leaderboard-position-user.dto';

export class LeaderboardPositionDto implements LeaderboardPosition {
  @ApiProperty()
  id: string;

  @ApiProperty({ name: 'leaderboard_id' })
  leaderboardId: string;

  @ApiProperty({ type: LeaderboardPositionUserDto })
  user: LeaderboardPositionUserDto;

  @ApiProperty()
  position: number;

  constructor(leaderboardPosition: LeaderboardPosition) {
    Object.assign(this, leaderboardPosition);
  }

  toDomain(): LeaderboardPosition {
    return {
      id: this.id,
      leaderboardId: this.leaderboardId,
      user: this.user.toDomain(),
      position: this.position,
    };
  }
}
