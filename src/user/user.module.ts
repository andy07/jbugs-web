import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserListComponent} from './user-list/user-list.component';
import {JumperDirective} from './directives/jumper.directive';
import {ButtonDisableDirective} from './directives/button-disable.directive';
import {HttpClientModule} from '@angular/common/http';
import {BackendService} from '../assets/backend.service';
import {AddUserComponent} from "./add-user/add-user.component";
import {MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule} from "@angular/material";
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
    AddUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  providers: [
    BackendService
  ]
})
export class UserModule {
}
