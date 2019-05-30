import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule, MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatMenuModule,
  MatOptionModule,
  MatTableModule
} from "@angular/material";
import {RouterModule} from "@angular/router";
import { DeletePermissionRoleComponent } from './delete-permission-role/delete-permission-role.component';
import { AddPermissionRoleComponent } from './add-permission-role/add-permission-role.component';
import {FormsModule} from "@angular/forms";

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
    MatInputModule,

  ]
})
export class RoleModule {

}
