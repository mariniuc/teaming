import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import { SearchRestService } from './services/search-rest.service';
import { HomePageComponent } from './home-page.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HomePageComponent,
    SearchComponent,
  ],
  providers: [
    SearchRestService
  ]
})
export class HomePageModule {
}
