import { User } from '../../user/interface/user.interface';

export type LeaderboardPositionUser = Pick<Required<User>, 'id' | 'name'>;
