import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {JumperDirective} from './directives/jumper.directive';
import {ButtonDisableDirective} from './directives/button-disable.directive';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from '../assets/backend.service';

@NgModule({
  declarations: [
    UserListComponent,
    JumperDirective,
    ButtonDisableDirective
  ],
  exports: [
    UserListComponent,
    JumperDirective,
    ButtonDisableDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BackendService
  ]
})
export class UserModule {
}
