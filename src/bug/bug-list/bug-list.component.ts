import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';
import {Router} from '@angular/router';
import {MatTableDataSource} from '@angular/material';

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
  dataSource = new MatTableDataSource<RestBug>();

  constructor(private bugService: BugService,
              private router: Router) {
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
  }

  /*this.dataSource.filterPredicate = (data: any, filtersJson: string) => {
    const matchFilter = [];
    const filters = JSON.parse(filtersJson);

    filters.forEach(filter => {
      // check for null values!
      const val = data[filter.id] === null ? '' : data[filter.id];
      matchFilter.push(val.toLowerCase().includes(filter.value.toLowerCase()));
    });

    // Choose one
    return matchFilter.every(Boolean); // AND condition
    // return matchFilter.some(Boolean); // OR condition
  };*/
}

