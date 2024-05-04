import { Module } from '@nestjs/common';
import { CommerceLocationController } from './commerce-location.controller';

@Module({ controllers: [CommerceLocationController] })
export class CommerceLocationModule {}
