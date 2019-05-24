import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public user: User;

  /*{firstName: '', lastName: '', email: '', mobileNumber: '', roles:null};*/


  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  log(x) {
    console.log('ngModel', x);
  }

  submit(form) {
    console.log('ngForm', form);
  }


}
