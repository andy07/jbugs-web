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

  /*@ViewChild(MatSort)
  set sort(value: MatSort) {
    this.dataSource.sort = value;
  }

  @ViewChild(MatPaginator)
  set paginator(value: MatPaginator) {
    this.dataSource.paginator = value;
  }*/
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource<RestBug>();

  constructor(private bugService: BugService) {
  }
  public bugList: RestBug[];
  displayedColumns: string[] = [
    'title',
    'version',
    'fixedVersion',
    'severity',
    'status',
    'assignedTo',
    'star'
  ];


  @Output()
  public outputFromBackend = new EventEmitter<RestBug>();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit() {

    this.bugService.getAllBugs().subscribe((bugList) => {
      this.bugList = bugList;
      this.bugList.forEach(bug => {
        console.log(bug);
      });
      this.dataSource = new MatTableDataSource(this.bugList);
      this.dataSource.paginator = this.paginator;
    });

  }
}
