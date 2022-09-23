import {Column, Entity, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {UserStatus} from "../utils/user-status";
import {Event} from "../../events/entities/event.entity";

@Entity()
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  status?: UserStatus;

  @ManyToMany(() => Event, (event) => event.users)
  events?: Event[]
}
