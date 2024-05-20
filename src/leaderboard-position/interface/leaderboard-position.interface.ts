import { LeaderboardPositionUser } from '../type/leaderboard-position.user.type';

export interface LeaderboardPosition {
  id: string;
  leaderboardId: string;
  user: LeaderboardPositionUser;
  position: number;
}
