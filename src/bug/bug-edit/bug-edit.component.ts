import {Component, Input, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {Attachment, RestBug} from '../models/restBug';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../user/service/user.service';
import {BugStatus} from '../models/bugStatus.model';
import {returnUserPermissionForBugClose} from '../../pages/login/token';


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
    targetDate: '',
    status: '',
    fixedVersion: '',
    severity: '',
    createdBy: '',
    assignedTo: ''
  };
  public bugStatusList: string[];
  private bugActualStatus: string;
  public severityList: string[] = [
    'CRITICAL',
    'HIGH',
    'MEDIUM',
    'LOW'
  ];
  public usernames: string[];
  public attachments: Attachment[] = [];
  public deleted: Attachment[] = [];
  constructor(private bugService: BugService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) {
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.bugService.getBugById(id).subscribe((bug) => {
        this.bug = bug;
        this.bugActualStatus = bug.status;
        this.bugService.getPostAllAllowedStatus(this.bug.status).subscribe((bugStatusList) => {
          this.bugStatusList = bugStatusList;
        });
        this.bugService.getAttachmentsByBugId(bug.id).subscribe(data =>{
          this.attachments = data;
        })
      },
      error => {
        this.router.navigate(['/home/error'], {queryParams: {message: error.error}});
      }
    )
    ;
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
    });
  }

  bugClosed(status: string): boolean {
    if (status === BugStatus.CLOSED.toString()) {
      return !returnUserPermissionForBugClose();
    }
  }

  public edit() {
    this.bugService.update(this.bug).subscribe(data => {
      this.deleted.forEach(attachment => {
        /*
        this.bugService.deleteAttachment(attachment.id).subscribe(data => {
          console.log(data);
        });
         */
      });
      this.redirectToBugList()
    });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  redirectToBugList() {
    this.router.navigate(['home/bugs/bug-list']);
  }

}

