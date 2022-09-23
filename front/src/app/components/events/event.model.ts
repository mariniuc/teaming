import {User} from "../users/user.model";

export class Event {
  public id: string;
  public title: string;
  public description: string;
  public date: string;
  public status: string;
  public imagePath: string;
  public users: User[];

  constructor(id: string, title: string, description: string, date: string, status: string, imagePath: string, users: User[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.date = date;
    this.status = status;
    this.imagePath = imagePath;
    this.users = [];
  }
}
