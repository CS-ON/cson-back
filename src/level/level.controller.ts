import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { LevelDto } from './dto/level.dto';
import { Level } from './interface/level.interface';
import { LevelMother } from './test/mother/level.mother';

@ApiBearerAuth()
@ApiForbiddenResponse({ description: 'Authorization is required' })
@ApiBadRequestResponse({ description: 'Bad request' })
@ApiTags('Level')
@Controller({ path: 'level', version: '1' })
export class LevelController {
  @ApiOkResponse({
    description: 'Level found',
    type: LevelDto,
  })
  @ApiNotFoundResponse({
    description: 'Level not found',
  })
  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) _id: string): Promise<LevelDto> {
    const foundLevel: Level = new LevelMother().getRandom();
    return new LevelDto(foundLevel);
  }

  @ApiOkResponse({
    description: 'Levels found',
    type: LevelDto,
    isArray: true,
  })
  @ApiNotFoundResponse({
    description: 'No level found',
  })
  @Get()
  async find(): Promise<LevelDto[]> {
    const foundLevel: LevelDto[] = [
      new LevelDto(new LevelMother().getRandom()),
      new LevelDto(new LevelMother().getRandom()),
      new LevelDto(new LevelMother().getRandom()),
    ];

    return foundLevel;
  }
}
