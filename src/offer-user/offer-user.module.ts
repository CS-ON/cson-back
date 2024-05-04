import { Module } from '@nestjs/common';
import { OfferUserController } from './offer-user.controller';

@Module({ controllers: [OfferUserController] })
export class OfferUserModule {}
