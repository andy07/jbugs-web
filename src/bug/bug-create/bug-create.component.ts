import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {Attachment, RestBug} from '../models/restBug';
import {UserService} from '../../user/service/user.service';
import {infoToken, PopUpMessageComponent} from '../../pages/login/login.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  private bug: RestBug = {
    id: -1,
    title: '',
    description: '',
    version: '',
    targetDate: '',
    status: 'NEW',
    fixedVersion: 'waiting',
    severity: '',
    createdBy: infoToken.sub,
    assignedTo: ''
  };

  public usernames: string[] = [];
  severity: string[] = [
    'CRITICAL',
    'HIGH',
    'MEDIUM',
    'LOW'
  ];

  public attachments: Attachment[] = [
    {
      file: '',
      name: 'file1',
      type: 'application/json',
      bugId: 0
    },
    {
      file: '',
      name: 'file2',
      type: 'application/json',
      bugId: 0
    },
    {
      file: '',
      name: 'file3',
      type: 'application/json',
      bugId: 0
    },
    {
      file: '',
      name: 'file4',
      type: 'application/json',
      bugId: 0
    }
  ];
  constructor(private service: BugService, private userService: UserService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
      console.log(usernames);
    });
  }

  public onSubmit(form) {
    this.service.save(this.bug).subscribe((bug) => {
        console.log(bug);
        this.attachments.forEach(attachment => {
          attachment.bugId = bug.id;
          console.log(attachment.bugId);
        });
        this.service.saveAttachments(bug.id, this.attachments).subscribe(data => {
          this.redirectToBugList();
        }, (error1) => {
          console.error(error1);
        });
      },
      (error) => {
        console.log(error);
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '100px', data: {data: error.error.message}});
        this.router.navigate(['/home/error'], {queryParams: {message: error.error}});
      });
  }

  redirectToBugList() {
    this.router.navigate(['home/bugs/bug-list']);
  }
}
