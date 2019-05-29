import { Component, OnInit } from '@angular/core';
import {RestUser} from "../models/restUser";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  rolesList = ['Administrator', 'Project manager', 'Test manager', 'Developer', 'Tester'];

  public user: RestUser = {
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    password:'',
    roles:[]
  };

  constructor() { }

  ngOnInit() {
  }

  public onSubmit() {
    //this.userService.save(this.user).subscribe((user) => this.user = user);
  }

  edit() {

  }


  selectAll(checkAll, select: NgModel, values) {
    //this.toCheck = !this.toCheck;
    if(checkAll){
      select.update.emit(values);
    }
    else{
      select.update.emit([]);
    }
  }

  selectAll2( select: NgModel, values) {
    select.update.emit([]);
  }

  equals(objOne, objTwo) {
    if (typeof objOne !== 'undefined' && typeof objTwo !== 'undefined') {
      return objOne.id === objTwo.id;
    }
  }


}
