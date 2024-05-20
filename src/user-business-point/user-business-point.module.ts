import { Module } from '@nestjs/common';
import { UserBusinessPointController } from './user-business-point.controller';

@Module({
  controllers: [UserBusinessPointController],
})
export class UserBusinessPointModule {}
