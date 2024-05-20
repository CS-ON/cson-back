import { Module } from '@nestjs/common';
import { BusinessLocationModule } from '../business-location/business-location.module';
import { BusinessModule } from '../business/business.module';
import { BusinessEmployeeModule } from '../business-employee/business-employee.module';
import { LeaderboardPositionModule } from '../leaderboard-position/leaderboard-position.module';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';
import { LevelModule } from '../level/level.module';
import { LocationModule } from '../location/location.module';
import { OfferBonusModule } from '../offer-bonus/offer-bonus.module';
import { OfferUserModule } from '../offer-user/offer-user.module';
import { OfferModule } from '../offer/offer.module';
import { SubscriptionModule } from '../subscription/subscription.module';
import { UserBusinessPointModule } from '../user-business-point/user-business-point.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    BusinessModule,
    BusinessLocationModule,
    BusinessEmployeeModule,
    LeaderboardModule,
    LeaderboardPositionModule,
    LevelModule,
    LocationModule,
    OfferModule,
    OfferBonusModule,
    OfferUserModule,
    SubscriptionModule,
    UserModule,
    UserBusinessPointModule,
  ],
})
export class AppModule {}
