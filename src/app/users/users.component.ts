import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users = [
    {id: 1, name:'Ana'},
    {id: 2, name:'Maria'},
    {id: 3, name:'Ioana'}
];

  constructor() { }

  ngOnInit() {

  }

}
