import { Level } from '../../level/interface/level.interface';

export interface UserBusinessPoint {
  id: string;
  userId: string;
  businessId?: string | null;
  level: Level;
  accumulatedPoints: number;
}
