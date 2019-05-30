import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';
import {BugStatusComponent} from './bug-status/bug-status.component';
import {BugListComponent} from './bug-list/bug-list.component';
import {BugEditComponent} from './bug-edit/bug-edit.component';
import {RouterModule} from '@angular/router';
import {BugViewDetailsComponent} from './bug-view-details/bug-view-details.component';


@NgModule({
  declarations: [
    BugCreateComponent,
    BugStatusComponent,
    BugListComponent,
    BugEditComponent,
    BugViewDetailsComponent
  ],
  exports: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent,
    BugEditComponent,
    BugViewDetailsComponent
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
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class BugModule {
}
