import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  hobbies=[
    {id:1, name:'Music'},
    {id:2, name:'Football'},
    {id:3, name:'Basketball'}
  ];

  text1 ='ala';
  text2 = 'dassssssssssssssssdsdfsdgsfdihgjsdfj';
  categories = [
    {id:1, name:'Dance'},
    {id:2, name:'Drive'},
    {id:3, name:'Darts'}
  ]

  constructor() { }

  ngOnInit() {
  }

  log(firstName: any) {
    console.log(firstName)
  }

  submit(formElement: NgForm) {
    console.log(formElement);

  }
}
