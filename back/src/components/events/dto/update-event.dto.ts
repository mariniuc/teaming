import { PartialType } from '@nestjs/mapped-types';
import { CreateEventDto } from './create-event.dto';
import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { EventStatus } from '../utils/event-status';
import { User } from '../../users/entities/user.entity';

export class UpdateEventDto extends PartialType(CreateEventDto) {
  @IsString()
  title: string;

  @IsString()
  description?: string;

  @IsDate()
  @IsNotEmpty()
  date: string;

  @IsString()
  status: EventStatus;

  @IsArray()
  images: string[];

  @IsArray()
  users: User[];
}
