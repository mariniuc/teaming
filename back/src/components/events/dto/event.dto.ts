import { EventStatus } from '../utils/event-status';
import { User } from '../../users/entities/user.entity';

export class EventDto {
  id: string;
  title: string;
  creator: string;
  description?: string;
  date?: string;
  status?: EventStatus;
  images?: string[];
  users?: User[];
}
