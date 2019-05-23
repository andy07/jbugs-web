import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {JumperDirective} from './directives/jumper.directive';
import {ButtonDisableDirective} from './directives/button-disable.directive';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from '../assets/backend.service';
import {MatCardModule, MatInputModule, MatSelectModule, MatTableModule} from "@angular/material";
import { AddUserComponent } from './add-user/add-user.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UserListComponent,
    JumperDirective,
    ButtonDisableDirective,
    AddUserComponent
  ],
  exports: [
    UserListComponent,
    JumperDirective,
    ButtonDisableDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [
    BackendService
  ]
})
export class UserModule {
}
