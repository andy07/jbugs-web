import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatChipsModule, MatExpansionModule, MatFormFieldModule, MatGridListModule,
  MatIconModule, MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatTableModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import { DeletePermissionRoleComponent } from './delete-permission-role/delete-permission-role.component';
import { AddPermissionRoleComponent } from './add-permission-role/add-permission-role.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [RolePermissionComponent, DeletePermissionRoleComponent, AddPermissionRoleComponent],
  exports:[RolePermissionComponent],
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
    MatListModule,
    MatGridListModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ]
})
export class RoleModule {

}
