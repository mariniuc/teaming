import {Injectable, Logger, NotFoundException} from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './entities/event.entity';
import { EventDto } from './dto/event.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class EventsService {
  constructor(@InjectRepository(Event) private eventsRepository: Repository<Event>) {
  }

  async create(createEventDto: CreateEventDto) {
    Logger.log(`Response to save event: ${JSON.stringify(createEventDto)}`);
    return await this.eventsRepository.save(createEventDto);
  }

  async findAll(): Promise<Event[]> {
    const events = await this.eventsRepository.find();
    Logger.log(`Response to get all events: ${JSON.stringify(events)}`);
    if (!events) {
      throw new NotFoundException(
          `There are no public events!`
      );
    }
    return events;
  }

  async findAllCreatedEventsByEmail(): Promise<Event[]> {
    const events = await this.eventsRepository.find();
    Logger.log(`Response to get all events: ${JSON.stringify(events)}`);
    if (!events) {
      throw new NotFoundException(
          `User has no events`
      );
    }
    return events;
  }

  async findAllParticipatingEventsByEmail(): Promise<Event[]> {
    const events = await this.eventsRepository.find();
    Logger.log(`Response to get all events: ${JSON.stringify(events)}`);
    if (!events) {
      throw new NotFoundException(
          `User has no events`
      );
    }
    return events;
  }

  async findOne(id: string): Promise<EventDto> {
    const eventEntity = await this.eventsRepository.findOne({
      where: {id: id}
    });
    if (!eventEntity) {
      throw new NotFoundException(
        `Event item doesn't exist`
      );
    }
    return eventEntity;
  }

  async update(id: string, updateEventDto: UpdateEventDto) {
    return await this.eventsRepository.update(id, updateEventDto);
  }

  async remove(id: string) {
    const foundEvent = await this.findOne(id);
    return this.eventsRepository.remove(foundEvent);
  }
}
