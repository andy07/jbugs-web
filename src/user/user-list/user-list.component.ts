import {Component, OnInit} from '@angular/core';
import {RestUser} from '../models/restUser';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';
import {infoToken} from "../../pages/login/login.component";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileNumber', 'status', 'username'];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    console.log(infoToken);
    this.userService.getAllUsers().subscribe((userList) => {
      this.userList = userList;
    });
  }



}
