import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../service/role.service";
import {RestBug} from "../../bug/models/restBug";
import {EnumPermission, RestPermission} from "../models/restPermission";
import {Observable, ReplaySubject} from "rxjs";
import {BugStatus} from "../../bug/models/bugStatus.model";
import {BugService} from "../../bug/service/bug.service";
import {RestRole, EnumRole} from "../models/restRole";
import {FormControl} from "@angular/forms";
import {take, takeUntil} from "rxjs/operators";
import {MatSelect} from "@angular/material";
import {RestUser} from "../../user/models/restUser";
import {infoToken} from "../../pages/login/login.component";
import {EnumValue} from "@angular/compiler-cli/src/ngtsc/metadata";

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {

  displayedColumns: string[] = ['type', 'permission'];
  public roleList: RestRole[];
  public permissionList: RestPermission[];

  @Output()
  public outputFromBackend = new EventEmitter<RestRole>();

  constructor(private roleService: RoleService) {
  }

  ngOnInit(): void {

    if(this.verifyUserPermission()) {
      this.roleService.getAllPermissions().subscribe((permissionList) => {
        this.permissionList = permissionList;
      });
      this.roleService.getAllRoles().subscribe((roleList) => {
        this.roleList = roleList;
      });

      // const type  = someEnum.MARIA;
      // console.log(someEnum[type])

    }
  }


  public onSubmit(role: RestRole) {

    this.roleService.update(role).subscribe();
    this.roleService.getAllRoles().subscribe((roleList) => {
      this.roleList = roleList;
    });
  }

  compareWithFunc(a, b) {
    return a && b ? a.type === b.type : a === b;
  }

  getEnumName(type: string): string {
    return EnumRole[type];
  }

  verifyUserPermission(): boolean {

    for(let i=0;i<infoToken.permissions.length;i++){
      if(infoToken.permissions[i]===EnumPermission[EnumPermission.PERMISSION_MANAGEMENT])
        console.log(EnumPermission[EnumPermission.PERMISSION_MANAGEMENT]);
      return true;
    }

    // infoToken.permissions.forEach(ss =>{
    //    if(ss===EnumPermission[EnumPermission.PERMISSION_MANAGEMENT])
    //      console.log(EnumPermission[EnumPermission.PERMISSION_MANAGEMENT]);
    //      return true;
    // });
    return false;
  }

}
