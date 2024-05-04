import { Module } from '@nestjs/common';
import { SuscriptionController } from './suscription.controller';

@Module({ controllers: [SuscriptionController] })
export class SuscriptionModule {}
