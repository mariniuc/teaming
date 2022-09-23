import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {EventStatus} from "../utils/event-status";
import {User} from "../../users/entities/user.entity";

@Entity()
export class Event {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  creator: string;

  @Column()
  description?: string;

  @Column()
  date?: string;

  @Column()
  status?: EventStatus;

  @Column()
  images?: string[];

  @ManyToMany(() => User, (user) => user.events)
  @JoinTable()
  users?: User[];
}
