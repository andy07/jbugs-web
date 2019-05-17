import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";
import {RestUser} from "../models/restUser";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  @Input()
  public show= true;

  @Output()
  public output = new EventEmitter<RestUser>();
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((userList)=>{
      this.userList=userList;
    })
  }

  alertUser(person:RestUser){
    this.output.emit(person);
  }


}
