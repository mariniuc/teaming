import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventDetailComponent} from './event-component/event.component';
import {EventsResolverService} from "./services/events-resolver.service";
import {EventUpdateComponent} from "./event-component/event-update/event-update.component";
import {EventsComponent} from "./events-component/events.component";


const appRoutes: Routes = [
  {path: '', component: EventsComponent},
  {path: 'new-event', component: EventUpdateComponent},
  {path: ':id/view-event', component: EventDetailComponent, resolve: [EventsResolverService]},
  {path: ':id/edit-event', component: EventDetailComponent, resolve: [EventsResolverService]}
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
