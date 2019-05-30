import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestUser} from "../models/restUser";
import {UserService} from "../service/user.service";
import {NgModel} from "@angular/forms";
import {RestRole, RoleConverter} from "../../role/models/restRole";
import {RoleService} from "../../role/service/role.service";
import { Observable } from 'rxjs';

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


    console.log(this.user.roles);

    for(let i=0;i<this.user.roles.length;i++){
        this.user.roles[i]=RoleConverter.frontEndToBackEnd(this.user.roles[i]);
    }
    console.log(this.user.roles);

     this.userService.save(this.user).subscribe((user) => this.user = user);

  }

  reload(){
    this.user.firstName='';
  }






}
