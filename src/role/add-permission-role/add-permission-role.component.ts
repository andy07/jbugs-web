import {Component, Input, OnInit} from '@angular/core';
import {RestBug} from "../../bug/models/restBug";
import {BugService} from "../../bug/service/bug.service";
import {ActivatedRoute} from "@angular/router";
import {restPermission} from "../models/restPermission";
import {RoleService} from "../service/role.service";
import {RestRole, Role} from "../models/restRole";

@Component({
  selector: 'app-add-permission-role',
  templateUrl: './add-permission-role.component.html',
  styleUrls: ['./add-permission-role.component.scss']
})
export class AddPermissionRoleComponent implements OnInit {

  @Input()
  private role: RestRole = {
    type:'',
    permissions: []
  };
  constructor(private roleService: RoleService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const type = this.route.snapshot.paramMap.get('type');
    console.log('Type is ' + type);
    this.roleService.getRoleByType(Role[type]).subscribe((role) => {
      this.role = role;
      console.log(this.role);
    });

  }

  public edit() {
    console.log('Succes!');
    this.roleService.update(this.role);
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

}
