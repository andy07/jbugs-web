import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BugListComponent} from './bug-list/bug-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {BugStatusComponent} from './bug-status/bug-status.component';
import {RouterModule} from '@angular/router';
import {BugEditComponent} from './bug-edit/bug-edit.component';

@NgModule({
  declarations: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent,
    BugEditComponent,
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
    MatTableModule,
    FormsModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class BugModule {
}
