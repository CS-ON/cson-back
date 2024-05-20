import { Module } from '@nestjs/common';
import { BusinessEmployeeController } from './business-employee.controller';

@Module({ controllers: [BusinessEmployeeController] })
export class BusinessEmployeeModule {}
