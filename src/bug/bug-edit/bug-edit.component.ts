import {Component, Input, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {ActivatedRoute, Router} from '@angular/router';
import {BugStatus} from "../models/bugStatus.model";
import {infoToken} from "../../pages/login/login.component";
import {EnumPermission} from "../../role/models/restPermission";


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
  public bugStatusList: string[];
  severity: string[] = [
    'CRITICAL',
    'HIGH',
    'MEDIUM',
    'LOW'
  ];
  constructor(private bugService: BugService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bug = bug;
      this.bugService.getPostAllAllowedStatus(this.bug.status).subscribe((bugStatusList) => {
        this.bugStatusList = bugStatusList;
      });
    });
  }

  bugClosed(status:string):boolean{
    if(status==BugStatus.CLOSED.toString()){
      for (let i = 0; i < infoToken.permissions.length; i++) {
        if (infoToken.permissions[i] === EnumPermission[EnumPermission.BUG_CLOSE]) {
          return false;
        }
      }
      return true;
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

