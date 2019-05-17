import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListComponent} from "./user-list/user-list.component";
import {UserComponent} from "./user/user.component";
import { JumperDirective } from './directives/jumper.directive';
import { ButtonDisableDirective } from './directives/button-disable.directive';
import {BackendService} from "./service/backend.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    UserListComponent,
    UserComponent,
    JumperDirective,
    ButtonDisableDirective
  ],
  exports: [
    UserComponent,
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
export class UserModule { }
