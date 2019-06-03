import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-bug-list',
  templateUrl: './bug-list.component.html',
  styleUrls: ['./bug-list.component.scss']
})
export class BugListComponent implements OnInit {

  constructor(private bugService: BugService) {
  }

  displayedColumns: string[] = [
    'Title',
    'Version',
    'FixedVersion',
    'Severity',
    'Status',
    'AssignedTo',
    'star'
  ];
  public bugList: RestBug[];
  public dataSource = new MatTableDataSource<RestBug>();


  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.bugService.getAllBugs().subscribe((bugList) => {
      this.bugList = bugList;
      this.dataSource = new MatTableDataSource<RestBug>(this.bugList);
      this.dataSource.paginator = this.paginator;
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

