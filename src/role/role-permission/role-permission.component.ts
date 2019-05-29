import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../service/role.service";
import {RestBug} from "../../bug/models/restBug";
import {restPermission} from "../models/permission.model";
import {Observable} from "rxjs";
import {BugStatus} from "../../bug/models/bugStatus.model";
import {BugService} from "../../bug/service/bug.service";
import {EnumRoles, RestRole, Roles} from "../models/role.model";

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {


  public roleList: RestRole[];
  displayedColumns: string[] = ['type', 'permission'];



  @Output()
  public outputFromBackend = new EventEmitter<RestRole>();



  constructor(private roleService : RoleService){

  }

  ngOnInit(): void {

    this.roleService.getAllRoles().subscribe((roleList) => {
      this.roleList = roleList;
    });

    console.log((<EnumRoles>Roles['ADM']).display);
    console.log((<EnumRoles>Roles['ADM']).variable);

  }
}
