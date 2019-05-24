import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {BugListComponent} from "./bug-list/bug-list.component";
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatCardModule,
  MatSelectModule
} from '@angular/material';
import { BugStatusComponent } from './bug-status/bug-status.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent
  ],
  exports: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class BugModule {
}
