export class User {
  public id: string;
  public name: string;
  public description: string;
  public status: string;
  public imagePath: string;

  constructor(id: string, name: string, description: string, status: string, imagePath: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.status = status;
    this.imagePath = imagePath;
  }
}
