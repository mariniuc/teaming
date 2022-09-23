import {Component, OnInit} from '@angular/core';
import {EventsService} from "../services/events.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Event} from "../event.model";
import {EventsRestService} from "../services/events-rest.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventsService: EventsService,
              private eventsRestService: EventsRestService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.eventsService.eventsListChanged.subscribe(data => {
      this.events = data;
    })
    this.events = this.eventsService.getEvents();
  }

  newEvent() {
    this.router.navigate(['new'], {relativeTo: this.activatedRoute});
  }

}
