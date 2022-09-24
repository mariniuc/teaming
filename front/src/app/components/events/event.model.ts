import {User} from "../users/user.model";

export class Event {
  public id: string;
  public title: string;
  public creator: string;
  public description: string;
  public date: string;
  public status: string;
  public images: string[];
  public users: User[];

  constructor(id: string, title: string, creator: string, description: string, date: string, status: string, images: string[], users: User[]) {
    this.id = id;
    this.title = title;
    this.creator = creator;
    this.description = description;
    this.date = date;
    this.status = status;
    this.images = images;
    this.users = users;
  }
}
