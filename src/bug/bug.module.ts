import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BugCreateComponent} from './bug-create/bug-create.component';
import {BugListComponent} from './bug-list/bug-list.component';
import {FormsModule} from '@angular/forms';


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
    FormsModule
  ]
})
export class BugModule {
}
