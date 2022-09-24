import { UserStatus } from '../utils/user-status';
import { Event } from '../../events/entities/event.entity';

export class UserDto {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  description?: string;
  status?: UserStatus;
  events?: Event[];
}
