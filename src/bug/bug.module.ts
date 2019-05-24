import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import { BugStatusComponent } from './bug-status/bug-status.component';
import {MatCardModule, MatSelectModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    BugCreateComponent,
    BugStatusComponent
  ],
  exports: [
    BugCreateComponent,
    BugStatusComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class BugModule {
}
