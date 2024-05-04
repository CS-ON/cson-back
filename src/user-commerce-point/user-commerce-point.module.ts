import { Module } from '@nestjs/common';
import { UserCommercePointController } from './user-commerce-point.controller';

@Module({
  controllers: [UserCommercePointController],
})
export class UserCommercePointModule {}
