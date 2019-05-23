import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  declarations: [
    BugCreateComponent
  ],
  exports: [
    BugCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class BugModule {
}
