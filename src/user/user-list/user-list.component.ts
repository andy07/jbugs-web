import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../models/user.model";
import {RestUser} from "../models/restUser";
import {UserService} from "../service/user.service";
import {MatTableModule} from '@angular/material/table';
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public userList: RestUser[];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'mobileNumber', 'status', 'username'];

  @Input()
  public show= true;

  @Output()

  public output = new EventEmitter<RestUser>();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((userList)=>{
      this.userList=userList;
    })
  }

  alertUser(person:RestUser){
    this.output.emit(person);
  }

  add(){
    this.router.navigate(['/add-user']);
  }


}
