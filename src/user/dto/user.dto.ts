import { ApiProperty } from '@nestjs/swagger';
import { User } from '../interface/user.interface';

export class UserDto implements User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  tlf: string;

  constructor(user: User) {
    Object.assign(this, user);
  }

  toDomain(): User {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      tlf: this.tlf,
    };
  }
}
