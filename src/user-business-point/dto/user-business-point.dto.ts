import { ApiProperty } from '@nestjs/swagger';
import { LevelDto } from '../../level/dto/level.dto';
import { UserBusinessPoint } from '../interface/user-business-point.interface';

export class UserBusinessPointDto implements UserBusinessPoint {
  @ApiProperty()
  id: string;

  @ApiProperty({ name: 'user_id' })
  userId: string;

  @ApiProperty({ name: 'business_id' })
  businessId?: string;

  @ApiProperty({ type: LevelDto })
  level: LevelDto;

  @ApiProperty({ name: 'accumulated_points' })
  accumulatedPoints: number;

  constructor(user: UserBusinessPoint) {
    Object.assign(this, user);
  }

  toDomain(): UserBusinessPoint {
    return {
      id: this.id,
      userId: this.userId,
      businessId: this.businessId,
      level: this.level.toDomain(),
      accumulatedPoints: this.accumulatedPoints,
    };
  }
}
