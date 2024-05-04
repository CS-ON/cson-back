import { Module } from '@nestjs/common';
import { OfferBonusController } from './offer-bonus.controller';

@Module({ controllers: [OfferBonusController] })
export class OfferBonusModule {}
