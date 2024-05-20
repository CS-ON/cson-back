import { Module } from '@nestjs/common';
import { BusinessLocationController } from './business-location.controller';

@Module({ controllers: [BusinessLocationController] })
export class BusinessLocationModule {}
