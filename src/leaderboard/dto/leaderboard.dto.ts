import { ApiProperty } from '@nestjs/swagger';
import { Leaderboard } from '../interface/leaderboard.interface';
import { LeaderboardPeriod } from '../enum/leaderboard.period.enum';

export class LeaderboardDto implements Leaderboard {
  @ApiProperty()
  id: string;

  @ApiProperty({ required: false, name: 'business_id' })
  businessId?: string;

  @ApiProperty({ type: Date })
  date: Date;

  @ApiProperty({ enum: LeaderboardPeriod, enumName: 'Leaderboard period' })
  period: LeaderboardPeriod;

  constructor(leaderboard: Leaderboard) {
    Object.assign(this, leaderboard);
  }

  toDomain(): Leaderboard {
    return {
      id: this.id,
      businessId: this.businessId,
      date: this.date,
      period: this.period,
    };
  }
}
