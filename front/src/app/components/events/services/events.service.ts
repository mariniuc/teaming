import {Injectable} from '@angular/core';
import {Event} from "../event.model";
import {Subject} from "rxjs";
import {EventsRestService} from "./events-rest.service";

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  eventsListChanged = new Subject<Event[]>();
  private events: Event[] = [];
  constructor(private eventsRestService: EventsRestService) {
    this.eventsRestService.getEvents().subscribe(res => {
      this.setEvents(res.body);
    });
  }

  getEvents() {
    return this.events.slice();
  }

  getEvent(id: string) {
    return this.events.find(event => event.id === id);
  }

  updateEvent(id: string, event: Event) {
    const itemToRemove = this.getEvent(id);
    this.events.splice(this.events.indexOf(itemToRemove), 1, event);
    this.eventsListChanged.next(this.events);
    this.eventsRestService.updateEvent(id, event);
  }

  addEvent(event: Event) {
   this.events.push(event);
   this.updateEventsList();
    this.eventsRestService.createEvent(event);
  }

  setEvents(events: Event[]) {
    this.events = events;
    this.updateEventsList();
  }

  updateEventsList() {
    this.eventsListChanged.next(this.events.slice());
  }
}
