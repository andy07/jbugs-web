import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {
  /*@ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }*/
  @Input()
  private bug: RestBug = {
    id: -1,
    title: '',
    description: '',
    version: '',
    targetDate: '',
    status: '',
    fixedVersion: '',
    severity: '',
    createdBy: '',
    assignedTo: ''
  };
  dataSource = new MatTableDataSource<RestBug>();

  constructor(private bugService: BugService,
              private router: Router,
              private route: ActivatedRoute,
              private dialog: MatDialog) {
  }

  /*declaram o lista de bug-uri care sa provina din backend*/
  public bugList: RestBug[];
  public selectedBug: RestBug;
  displayedColumns: string[] = ['Title', 'Description', 'Version', 'FixedVersion', 'Severity', 'AssignedTo', 'star'];


  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    /*ia userList-ul emis prin observable si il pune in lista userList*/
    this.bugService.getAllBugs().subscribe((bugList) => {
      this.bugList = bugList;
      this.dataSource = new MatTableDataSource<RestBug>(this.bugList);
    });
    const title = this.route.snapshot.paramMap.get('title');
    console.log('title is ' + title);
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bug = bug;
    });
  }
}

