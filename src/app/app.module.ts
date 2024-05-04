import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommerceModule } from '../commerce/commerce.module';
import { CommerceLocationModule } from '../commerce-location/commerce-location.module';
import { CommerceUserModule } from '../commerce-user/commerce-user.module';
import { LeaderboardModule } from '../leaderboard/leaderboard.module';
import { LeaderboardPositionModule } from '../leaderboard-position/leaderboard-position.module';
import { LevelModule } from '../level/level.module';
import { LocationModule } from '../location/location.module';
import { OfferModule } from '../offer/offer.module';
import { OfferBonusModule } from '../offer-bonus/offer-bonus.module';
import { OfferUserModule } from '../offer-user/offer-user.module';
import { SuscriptionModule } from '../suscription/suscription.module';
import { UserModule } from '../user/user.module';
import { UserCommercePointModule } from '../user-commerce-point/user-commerce-point.module';

@Module({
  imports: [
    CommerceModule,
    CommerceLocationModule,
    CommerceUserModule,
    LeaderboardModule,
    LeaderboardPositionModule,
    LevelModule,
    LocationModule,
    OfferModule,
    OfferBonusModule,
    OfferUserModule,
    SuscriptionModule,
    UserModule,
    UserCommercePointModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
