import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BusinessEmployeeDto } from './dto/business-employee.dto';
import { BusinessEmployee } from './interface/business-employee.interface';
import { BusinessEmployeeMother } from './test/mother/business-employee.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Business employee')
@Controller({ path: 'business-employee', version: '1' })
export class BusinessEmployeeController {
  @ApiOkResponse({
    description: 'Business employee found',
    type: BusinessEmployeeDto,
  })
  @ApiNotFoundResponse({
    description: 'Business employee not found',
  })
  @Get(':id')
  async findOne(
    @Param('id', ParseUUIDPipe) _id: string,
  ): Promise<BusinessEmployeeDto> {
    const foundBusinessEmployee: BusinessEmployee =
      new BusinessEmployeeMother().getRandom();
    return new BusinessEmployeeDto(foundBusinessEmployee);
  }

  @ApiOkResponse({
    description: 'Business employees found',
    type: BusinessEmployeeDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No business employees found',
  })
  @Get()
  async find(): Promise<BusinessEmployeeDto[]> {
    const foundBusinessEmployee: BusinessEmployeeDto[] = [
      new BusinessEmployeeDto(new BusinessEmployeeMother().getRandom()),
      new BusinessEmployeeDto(new BusinessEmployeeMother().getRandom()),
      new BusinessEmployeeDto(new BusinessEmployeeMother().getRandom()),
    ];

    return foundBusinessEmployee;
  }
}
