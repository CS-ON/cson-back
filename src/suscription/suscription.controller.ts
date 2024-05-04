import { Controller, Get, Param } from '@nestjs/common';
import { SuscriptionDto } from './dto/suscription.dto';
import { Suscription } from './interface/suscription.interface';
import { SuscriptionDtoMother } from './test/mother/suscription.dto.mother';
import { SuscriptionFindOneFiltersDto } from './interface/suscription.find-one-filters.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Suscription')
@Controller('suscription')
export class SuscriptionController {
  @ApiOkResponse()
  @Get(':id')
  async find(
    @Param() queryParams: SuscriptionFindOneFiltersDto,
  ): Promise<SuscriptionDto> {
    const foundSuscription: Suscription =
      new SuscriptionDtoMother().getRandom();
    return new SuscriptionDto(foundSuscription);
  }
}
