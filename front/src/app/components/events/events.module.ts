import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { EventsComponent } from './events-component/events.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventDetailComponent } from './event-component/event.component';
import { EventUpdateComponent } from './event-component/event-update/event-update.component';
import { EventsService } from './services/events.service';


@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventUpdateComponent,
  ],
  imports: [
    SharedModule,
    EventsRoutingModule,
  ],
  exports: [
    EventsComponent,
    EventDetailComponent,
    EventUpdateComponent,
  ],
  providers: [
    EventsService,
  ],
})
export class EventsModule {
}
