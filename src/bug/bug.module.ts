import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';

@NgModule({
  declarations: [
    BugCreateComponent
  ],
  exports: [
    BugCreateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BugModule {
}
