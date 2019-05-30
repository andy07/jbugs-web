import {Component, Input, OnInit} from '@angular/core';
import {RestUser} from '../../user/models/restUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  private user: RestUser;
  constructor() { }

  ngOnInit() {
  }

}
