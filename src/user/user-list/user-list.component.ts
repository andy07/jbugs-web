import {Component, OnInit} from '@angular/core';
import {RestUser} from '../models/restUser';
import {UserService} from '../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {infoToken, PopUpMessageComponent} from "../../pages/login/login.component";
import {MatDialog} from "@angular/material";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileNumber', 'status', 'username','star'];
  private newStatus: boolean;

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog,private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(infoToken)
    this.userService.getAllUsers().subscribe(
      (userList) => {
      this.userList = userList;
    },
      error=>{
        console.log(error);
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '100px', data: {data: error.error}});
      });
  }


  onChange(user: any) {
    this.newStatus=!user.status;
    this.userService.updateUserStatus(user.username,this.newStatus).subscribe(message=>{
        this.ngOnInit();
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '120px', data: {data: '\n' +
              'User status has been successfully updated!'}});
    },
      error=>{
      this.ngOnInit();
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '120px', data: {data: error.error.message}});
    })


  }
}
