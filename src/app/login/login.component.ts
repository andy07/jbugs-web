import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  log(firstName: string) {
    console.log(firstName)
  }

  login(formElement: NgForm) {
    console.log(formElement)
    this.router.navigate(['/users']);
  }
}
