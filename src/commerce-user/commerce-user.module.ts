import { Module } from '@nestjs/common';
import { CommerceUserController } from './commerce-user.controller';

@Module({ controllers: [CommerceUserController] })
export class CommerceUserModule {}
