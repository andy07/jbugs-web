import {Component, Input, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/service/user.service';


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
  public usernames: string[];
  constructor(private bugService: BugService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bug = bug;
      this.bugService.getPostAllAllowedStatus(this.bug.status).subscribe((bugStatusList) => {
        this.bugStatusList = bugStatusList;
      });
    });
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
      console.log(usernames);
    });
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

