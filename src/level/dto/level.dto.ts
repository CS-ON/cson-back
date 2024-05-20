import { ApiProperty } from '@nestjs/swagger';
import { LevelExtraPointsType } from '../enum/level.extra-points.type.enum';
import { Level } from '../interface/level.interface';

export class LevelDto implements Level {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty({ name: 'extra_offer_points' })
  extraOfferPoints: number;

  @ApiProperty({
    name: 'extra_points_type',
    enum: LevelExtraPointsType,
    enumName: 'Level extra points type',
  })
  extraPointsType: LevelExtraPointsType;

  constructor(level: Level) {
    Object.assign(this, level);
  }

  toDomain(): Level {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      extraOfferPoints: this.extraOfferPoints,
      extraPointsType: this.extraPointsType,
    };
  }
}
