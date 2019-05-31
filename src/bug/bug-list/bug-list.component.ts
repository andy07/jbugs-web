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
  /*@ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }*/

  @ViewChild(MatSort) sortForDataSource: MatSort;

  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sortForDataSource;
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
}

