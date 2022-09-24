import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { EventStatus } from './event-status';

export class EventStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    EventStatus.NEW,
    EventStatus.IN_PROGRESS,
    EventStatus.FINISHED,
  ];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is not a valid status!`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.allowedStatuses.indexOf(status);
    return index !== -1;
  }
}
