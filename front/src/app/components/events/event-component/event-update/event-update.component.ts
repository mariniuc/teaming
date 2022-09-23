import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {EventsService} from "../../services/events.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Event} from "../../event.model";

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.scss']
})
export class EventUpdateComponent implements OnInit {
  private id: string;
  editMode = false;
  eventForm: FormGroup;
  event: Event;

  constructor(private activatedRoute: ActivatedRoute, private eventsService: EventsService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let eventTitle;
    let eventImagePath;
    let eventDescription;
    let eventDate;
    const eventUsers = new FormArray([]);

    if (this.editMode) {
      this.event = this.eventsService.getEvent(this.id);
      eventTitle = this.event.title;
      eventImagePath = this.event.imagePath;
      eventDescription = this.event.description;
      eventDate = this.event.date;
      if (this.event.users) {
        for (const user of this.event.users) {
          eventUsers.push(new FormGroup({
            'users': new FormControl(user.name, Validators.required),
          }));
        }
      }
    }

    this.eventForm = new FormGroup({
      'title': new FormControl(eventTitle, Validators.required),
      'imagePath': new FormControl(eventImagePath, Validators.required),
      'description': new FormControl(eventDescription, Validators.required),
      'date': new FormControl(eventDate, Validators.required),
      'users': eventUsers
    });
  }

  onSubmit() {
    this.event = this.eventForm.value;
    if (this.editMode) {
      this.eventsService.updateEvent(this.id, this.event);
    } else {
      this.eventsService.addEvent(this.event);
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
}
