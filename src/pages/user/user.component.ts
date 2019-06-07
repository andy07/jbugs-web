import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {infoToken} from "../login/login.component";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public username: string;
  constructor(private router: Router, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.notificationService.startListener((msg) => console.log(msg));
  }

  logout() {
    this.notificationService.stopListener();
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUsername() {
    return infoToken.sub;
  }
}
