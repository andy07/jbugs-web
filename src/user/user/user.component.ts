import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../models/user.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  public user: User;

  @Output()
  public output = new EventEmitter<User>();



  constructor() { }

  ngOnInit() {
  }
  alertUser(person:User){
    this.output.emit(person);
  }



}
