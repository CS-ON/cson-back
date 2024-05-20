import { LeaderboardPeriod } from '../enum/leaderboard.period.enum';

export interface Leaderboard {
  id: string;
  businessId?: string | null;
  date: Date;
  period: LeaderboardPeriod;
}
