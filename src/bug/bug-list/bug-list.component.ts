import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  /*declaram o lista de bug-uri care sa provina din backend*/
  public bugList: RestBug[];
  displayedColumns: string[] = ['Title', 'Description', 'Version', 'FixedVersion', 'Severity', 'AssignedTo'];

  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  constructor(private bugService: BugService, private router: Router) {
  }

  ngOnInit() {
    /*ia userList-ul emis prin observable si il pune in lista userList*/
    this.bugService.getAllBugs().subscribe((bugList) => {
       this.bugList = bugList;
    });
  }
}
