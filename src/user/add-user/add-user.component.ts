import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestUser} from "../models/restUser";
import {UserService} from "../service/user.service";
import {NgModel} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  rolesList = ['Administrator', 'Project manager', 'Test manager', 'Developer', 'Tester'];

  public user: RestUser = {
    firstName:'',
    lastName:'',
    email:'',
    mobileNumber:'',
    password:'',
  roles:[]
  };

  /*{firstName: '', lastName: '', email: '', mobileNumber: '', roles:null};*/



  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {


  }

  public onSubmit() {
    //this.userService.save(this.user).subscribe((user) => this.user = user);
  }


  add() {

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
