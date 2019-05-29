import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RestBug} from '../models/restBug';
import {BugService} from '../service/bug.service';
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

  constructor(private bugService: BugService) {
  }

  public bugList: RestBug[];
  displayedColumns: string[] = [
    'Title',
    'Version',
    'FixedVersion',
    'Severity',
    'Status',
    'AssignedTo',
    'star'
  ];


  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  ngOnInit() {
    this.bugService.getAllBugs().subscribe((bugList) => {
      this.bugList = bugList;
      this.bugList.forEach(bug => {
        console.log(bug);
      });
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

