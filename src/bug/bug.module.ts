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
  MatPaginatorModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule
} from '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {BugStatusComponent} from './bug-status/bug-status.component';
import {BugListComponent} from './bug-list/bug-list.component';
import {BugEditComponent} from './bug-edit/bug-edit.component';
import {RouterModule} from '@angular/router';
import {BugViewDetailsComponent} from './bug-view-details/bug-view-details.component';
import {AttachmentCreateComponent} from './attachment-create/attachment-create.component';
import {AttachmentListComponent} from './attachment-list/attachment-list.component';
import { BugGraphComponent } from './bug-graph/bug-graph.component';
import { PiechartComponent } from './piechart/piechart.component';




@NgModule({
  declarations: [
    BugCreateComponent,
    BugStatusComponent,
    BugListComponent,
    BugEditComponent,
    BugViewDetailsComponent,
    AttachmentCreateComponent,
    AttachmentListComponent,
    BugGraphComponent,
    PiechartComponent
  ],
  exports: [
    BugCreateComponent,
    BugListComponent,
    BugStatusComponent,
    BugEditComponent,
    BugViewDetailsComponent,

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
    MatMenuModule,
    MatPaginatorModule,
    MatSortModule,
    MatSidenavModule,


  ]
})
export class BugModule {
}
