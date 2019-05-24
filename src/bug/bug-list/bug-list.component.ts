import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  /*declaram o lista de bug-uri care sa provina din backend*/
  public bugList: RestBug[];

  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  constructor(private bugService: BugService) {
  }

  ngOnInit() {
    /*ia userList-ul emis prin observable si il pune in lista userList*/
    /* this.bugService.getAllBugs().subscribe((bugList) => {
       this.bugList = bugList;
     });*/
  }

}
