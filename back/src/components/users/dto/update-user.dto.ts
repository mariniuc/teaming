import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UserStatus } from '../utils/user-status';
import { Event } from '../../events/entities/event.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  email: string;
  firstName: string;
  lastName: string;
  description?: string;
  status?: UserStatus;
  events?: Event[];
}
