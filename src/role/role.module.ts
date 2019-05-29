import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionComponent } from './role-permission/role-permission.component';
import {MatOptionModule, MatTableModule} from "@angular/material";

@NgModule({
  declarations: [RolePermissionComponent],
  exports:[RolePermissionComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatOptionModule
  ]
})
export class RoleModule {

}
