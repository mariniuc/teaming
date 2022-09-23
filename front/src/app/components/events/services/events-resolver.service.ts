import {filter, map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Event} from "../event.model";
import {EventsRestService} from "./events-rest.service";
import {EventsService} from "./events.service";
import {Resolve} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class EventsResolverService implements Resolve<Event[]> {
  constructor(private eventsRestService: EventsRestService, private eventsService: EventsService) {
  }

  resolve(): Observable<Event[]> | Promise<Event[]> | Event[] {
    const events = this.eventsService.getEvents();

    if (events.length === 0) {
      return this.eventsRestService.getEvents().pipe(
        filter((res: HttpResponse<Event[]>) => res.ok),
        map((events: HttpResponse<Event[]>) => events.body));
    } else {
      return events;
    }
  }
}
