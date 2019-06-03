import {Component, OnInit} from '@angular/core';
import {RestUser} from '../models/restUser';
import {UserService} from '../service/user.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileNumber', 'status', 'username','star'];

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((userList) => {
      this.userList = userList;
    });
  }



}
