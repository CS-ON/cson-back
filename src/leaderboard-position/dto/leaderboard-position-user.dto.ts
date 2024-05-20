import { ApiProperty } from '@nestjs/swagger';
import { LeaderboardPosition } from '../interface/leaderboard-position.interface';
import { LeaderboardPositionUser } from '../type/leaderboard-position.user.type';

export class LeaderboardPositionUserDto implements LeaderboardPositionUser {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  constructor(leaderboardPosition: LeaderboardPosition) {
    Object.assign(this, leaderboardPosition);
  }

  toDomain(): LeaderboardPositionUser {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
