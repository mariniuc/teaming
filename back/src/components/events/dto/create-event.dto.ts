import {IsArray, IsDate, IsNotEmpty, IsString} from "class-validator";
import {EventStatus} from "../utils/event-status";
import {User} from "../../users/entities/user.entity";

export class CreateEventDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    creator: string;

    @IsString()
    description: string;

    @IsDate()
    @IsNotEmpty()
    date: string;

    @IsString()
    status: EventStatus;

    @IsString()
    images: string[];

    @IsArray()
    users: User[];
}
