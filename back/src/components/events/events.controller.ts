import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  ValidationPipe,
  UsePipes,
  Req,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { EventDto } from './dto/event.dto';
import { Event } from './entities/event.entity';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async create(@Body() createEventDto: any): Promise<CreateEventDto> {
    Logger.log(`Request to save event`);
    return await this.eventsService.create(createEventDto);
  }

  @Get('')
  async findAll(): Promise<Event[]> {
    Logger.log(`Request to get all events`);
    return await this.eventsService.findAll();
  }

  @Get('search')
  async search(@Req() req: Request, @Query() query): Promise<Event[]> {
    Logger.log(`Request to get events by search ${query.query}`);
    return await this.eventsService.search(query.query);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EventDto> {
    Logger.log(`Request to get event by id: ${id}`);
    return await this.eventsService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return await this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}
