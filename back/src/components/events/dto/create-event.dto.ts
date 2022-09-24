import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { EventStatus } from '../utils/event-status';
import { User } from '../../users/entities/user.entity';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  creator: string;

  @IsString()
  description: string;

  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  status: EventStatus;

  // @IsArray()
  images: string[];

  @IsArray()
  users: User[];
}
