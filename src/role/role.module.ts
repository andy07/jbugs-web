import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatOptionModule, MatTableModule} from "@angular/material";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [RolePermissionComponent],
  exports:[RolePermissionComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatOptionModule,
    MatIconModule,
    MatMenuModule,
    RouterModule,
    MatButtonModule
  ]
})
export class RoleModule {

}
