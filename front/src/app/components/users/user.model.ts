import { Event } from '../events/event.model';

export class User {
  public id: string;
  public email: string;
  public firstName: string;
  public lastName: string;
  public description: string;
  public status: string;
  public imagePath: string;
  public events: Event[];

  constructor(id: string, firstName: string, lastName: string, description: string, status: string, imagePath: string, events: Event[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.description = description;
    this.status = status;
    this.imagePath = imagePath;
    this.events = events;
  }
}
