import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../service/role.service";
import {RestBug} from "../../bug/models/restBug";
import {restPermission} from "../models/restPermission";
import {Observable} from "rxjs";
import {BugStatus} from "../../bug/models/bugStatus.model";
import {BugService} from "../../bug/service/bug.service";
import {RestRole, Role} from "../models/restRole";

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {


  public roleList: RestRole[];
  displayedColumns: string[] = ['type', 'permission','star'];
   // string = 'ADM';


  @Output()
  public outputFromBackend = new EventEmitter<RestRole>();


  constructor(private roleService : RoleService){

  }

  ngOnInit(): void {

    this.roleService.getAllRoles().subscribe((roleList) => {
      roleList.forEach(s => {
        s.type = Role[s.type];
        console.log("sdfghjk   "+s.type);
        s.type = Role[s.type];

        console.log("sdfghjk   "+s.type);

      });
      this.roleList = roleList;
    });

  }


}
