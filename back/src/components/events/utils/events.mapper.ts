import { EventDto } from '../dto/event.dto';
import { Event } from '../entities/event.entity';

export const toEventDto = (data: Event): EventDto => {
  const { id, title, description, creator } = data;

  const eventDto: EventDto = { id, title, description, creator };
  return eventDto;
};
