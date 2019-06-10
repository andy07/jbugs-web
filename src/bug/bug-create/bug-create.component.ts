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
    targetDate: new Date(new Date().getTime()).toDateString(),
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

  public attachments: Attachment[] = [];
  constructor(private service: BugService, private userService: UserService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
      console.log(usernames);
    });
  }

  public onSubmit(form) {
    console.log(this.bug);
    this.service.save(this.bug).subscribe((bug) => {
      console.log("here");
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
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '100px',
          data: {data: error.error.message || 'Something broke...'}});
        this.router.navigate(['/home/error'], {queryParams: {message: error.error}});
      });
  }

  redirectToBugList() {
    this.router.navigate(['home/bugs/bug-list']);
  }
}
