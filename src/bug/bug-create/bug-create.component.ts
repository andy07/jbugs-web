import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {UserService} from '../../user/service/user.service';
import {PopUpMessageComponent} from '../../pages/login/login.component';
import {MatDialog} from '@angular/material';
import {Router} from '@angular/router';

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
    targetDate: new Date(),
    status: '',
    fixedVersion: '',
    severity: '',
    createdBy: '',
    assignedTo: ''
  };
  public usernames: string[] = [];

  constructor(private service: BugService, private userService: UserService, public dialog: MatDialog, private router: Router) {
  }

  ngOnInit() {
    this.userService.getUsernames().subscribe((usernames) => {
      this.usernames = usernames;
      console.log(usernames);
    });
  }

  public onSubmit() {
    this.service.save(this.bug).subscribe(
      (bug) => {
        this.bug = bug;
      },
      (error) => {
        console.log(error);
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '100px', data: {data: error.error.message}});
        this.router.navigate(['/home/error'], {queryParams: {message: error.error}});
      });
  }

}
