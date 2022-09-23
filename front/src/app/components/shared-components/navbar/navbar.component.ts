import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {EventsService} from "../../events/services/events.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private eventsService: EventsService) { }

  ngOnInit(): void {
  }
}
