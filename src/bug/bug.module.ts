import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BugCreateComponent
  ],
  exports: [
    BugCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BugModule {
}
