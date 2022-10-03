import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared-components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { EventsModule } from './components/events/events.module';
import { UserComponent } from './components/users/user-component/user.component';
import { UsersComponent } from './components/users/users/users.component';
import { UserUpdateComponent } from './components/users/user-component/user-update/user-update.component';
import { SidebarComponent } from './components/shared-components/sidebar/sidebar.component';
import { HomePageModule } from './components/home-page/home-page.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    UsersComponent,
    UserUpdateComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EventsModule,
    HomePageModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
