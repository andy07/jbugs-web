import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RestUser} from '../models/restUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  rolesList: string[] = ['Administrator', 'Project manager', 'Test manager', 'Developer', 'Tester'];
  roleString: string;

  public user: RestUser = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    roles: []
  };

  /*{firstName: '', lastName: '', email: '', mobileNumber: '', roles:null};*/


  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit(form) {
    console.log('ngForm', form);
  }



}
