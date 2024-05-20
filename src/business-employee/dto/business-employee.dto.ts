import { ApiProperty } from '@nestjs/swagger';
import { BusinessEmployee } from '../interface/business-employee.interface';

export class BusinessEmployeeDto implements BusinessEmployee {
  @ApiProperty()
  id: string;

  @ApiProperty({ name: 'business_id' })
  businessId: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  constructor(businessEmployee: BusinessEmployee) {
    Object.assign(this, businessEmployee);
  }

  toDomain(): BusinessEmployee {
    return {
      id: this.id,
      businessId: this.businessId,
      name: this.name,
      email: this.email,
    };
  }
}
