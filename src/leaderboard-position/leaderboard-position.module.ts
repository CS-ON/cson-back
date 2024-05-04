import { Module } from '@nestjs/common';
import { LeaderboardPositionController } from './leaderboard-position.controller';

@Module({ controllers: [LeaderboardPositionController] })
export class LeaderboardPositionModule {}
