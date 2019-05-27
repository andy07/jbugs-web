import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import { BugStatusComponent } from './bug-status/bug-status.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BugListComponent} from './bug-list/bug-list.component';
import {BugEditComponent} from './bug-edit/bug-edit.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    BugCreateComponent,
    BugStatusComponent,
    BugListComponent,
    BugEditComponent
  ],
  exports: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent,
    BugEditComponent
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
