import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../service/role.service";
import {RestBug} from "../../bug/models/restBug";
import {RestPermission} from "../models/restPermission";
import {Observable, ReplaySubject} from "rxjs";
import {BugStatus} from "../../bug/models/bugStatus.model";
import {BugService} from "../../bug/service/bug.service";
import {EnumRoles, RestRole, Role, RoleConverter, Roles} from "../models/restRole";
import {FormControl} from "@angular/forms";
import {take, takeUntil} from "rxjs/operators";
import {MatSelect} from "@angular/material";
import {RestUser} from "../../user/models/restUser";

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {

  displayedColumns: string[] = ['type', 'permission'];
  public roleList: RestRole[];
  public permissionList: RestPermission[];
  allValues = Role;

  @Output()
  public outputFromBackend = new EventEmitter<RestRole>();

  constructor(private roleService: RoleService) {
  }

  ngOnInit(): void {

    this.roleService.getAllPermissions().subscribe((permissionList) => {
      this.permissionList = permissionList;
    });
    this.roleService.getAllRoles().subscribe((roleList) => {
      roleList.forEach(s => {
        s.type = RoleConverter.backEndToFrontEnd(s.type);
      });
      this.roleList = roleList;
    });

    // console.log((<EnumRoles>Roles['ADM']).display);
    // console.log((<EnumRoles>Roles['ADM']).variable);

  }


  public onSubmit(role: RestRole) {

    role.type = RoleConverter.frontEndToBackEnd(role.type);
    this.roleService.update(role).subscribe();
    this.roleService.getAllRoles().subscribe((roleList) => {
      roleList.forEach(s => {
        s.type = RoleConverter.backEndToFrontEnd(s.type);
      });
      this.roleList = roleList;
    });
  }

  compareWithFunc(a, b) {
    //return a.type === b.type; //todo why - cannot read property type of null
    return a && b ? a.type === b.type : a === b;
  }

}
