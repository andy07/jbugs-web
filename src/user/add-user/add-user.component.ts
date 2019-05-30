import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestUser} from "../models/restUser";
import {UserService} from "../service/user.service";
import {NgModel} from "@angular/forms";
import {RestRole, Role, RoleConverter} from "../../role/models/restRole";
import {RoleService} from "../../role/service/role.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public roleList: RestRole[];

  public user: RestUser = {
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    password:'',
    roles:[]
  };

  /*{firstName: '', lastName: '', email: '', mobileNumber: '', roles:null};*/



  constructor(private roleService : RoleService, private userService: UserService, private router: Router) { }

  ngOnInit() {

    this.roleService.getAllRoles().subscribe((roleList) => {
      roleList.forEach(s => {
        s.type = RoleConverter.backEndToFrontEnd(s.type);
      });
      this.roleList = roleList;
    });
  }

  public onSubmit() {

    //todo convert RoleList to string of type for user.roles

    this.userService.save(this.user).subscribe((user) => this.user = user);
  }

  add() {

  }


}
