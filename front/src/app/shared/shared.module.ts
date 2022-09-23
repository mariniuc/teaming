import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DropdownDirective} from "./directives/dropdown.directive";
import {AlertComponent} from "./alert/alert.component";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    AlertComponent,
    DropdownDirective
  ]
})
export class SharedModule {
}
