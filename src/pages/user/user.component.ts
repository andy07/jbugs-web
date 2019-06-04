import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {infoToken} from "../login/login.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  public username: string;
  constructor(private router: Router) {
  }

  ngOnInit() {

  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

}
