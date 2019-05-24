import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule} from '@angular/forms';
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


@NgModule({
  declarations: [
    BugCreateComponent,
    BugListComponent
  ],
  exports: [
    BugCreateComponent,
    BugListComponent
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
    MatInputModule
  ]
})
export class BugModule {
}
