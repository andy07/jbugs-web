import {Component, Input, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/service/user.service';
import {BugStatus} from "../models/bugStatus.model";
import {infoToken} from "../../pages/login/login.component";
import {EnumPermission} from "../../role/models/restPermission";
import {returnUserPermissionForBugClose} from "../../pages/login/token";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {
  @Input()
  private bug: RestBug = {
    id: -1,
    title: '',
    description: '',
    version: '',
    targetDate: new Date(),
    status: '',
    fixedVersion: '',
    severity: '',
    createdBy: '',
    assignedTo: ''
  };
  severity: string[] = [
    'CRITICAL',
    'HIGH',
    'MEDIUM',
    'LOW'
  ];
  public bugStatusList: string[];
  public usernames: string[];

  private bugActualStatus: string;

  constructor(private bugService: BugService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bugActualStatus = bug.status;
      this.bug = bug;
      this.bugService.getPostAllAllowedStatus(this.bug.status).subscribe((bugStatusList) => {
        this.bugStatusList = bugStatusList;
      });
    });
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
    });
  }

  bugClosed(status: string): boolean {
    if (status == BugStatus.CLOSED.toString()) {
      return !returnUserPermissionForBugClose();
    }
  }

  public edit() {
    this.bugService.update(this.bug).subscribe(data => {
      this.redirectToBugList();
    });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  redirectToBugList() {
    this.router.navigate(['home/bugs/bug-list']);
  }

}

