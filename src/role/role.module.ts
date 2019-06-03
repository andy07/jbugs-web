import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RolePermissionComponent} from './role-permission/role-permission.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatOptionModule, MatSelectModule,
  MatTableModule
} from '@angular/material';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    RolePermissionComponent],
  exports: [
    RolePermissionComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatOptionModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class RoleModule {

}
