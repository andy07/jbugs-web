import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestUser, Role} from "../models/restUser";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  rolesList: string[] = ['Administrator', 'Project manager', 'Test manager', 'Developer', 'Tester'];
  roleString: string;

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

  log(x) {
    console.log('ngModel', x);
  }

  submit(form) {
    console.log('ngForm', form);
  }

  public onSubmit() {
    //this.userService.save(this.user).subscribe((user) => this.user = user);
  }


  add() {

  }
}
