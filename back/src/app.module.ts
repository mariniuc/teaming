import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import {UsersModule} from './components/users/users.module';
import {EventsModule} from './components/events/events.module';
import {User} from "./components/users/entities/user.entity";
import {Event} from "./components/events/entities/event.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: 'dev.env',
        }),
        TypeOrmModule.forRoot({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "postgres",
            database: "teaming",
            autoLoadEntities: true,
            synchronize: true,
            logging: true,
            entities: [User, Event],
            subscribers: [],
            migrations: [],
        }),
        UsersModule,
        EventsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
