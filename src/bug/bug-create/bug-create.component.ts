import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {infoToken} from '../../pages/login/login.component';
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
    targetDate: new Date(),
    status: 'NEW',
    fixedVersion: '',
    severity: '',
    createdBy: infoToken.sub,
    assignedTo: ''
  };
  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public onSubmit(form: NgForm) {
    this.bug.targetDate = form.controls.targetDate.value;
    console.log(this.bug);
    this.service.save(this.bug).subscribe((bug) => {
      this.bug = bug;
      console.log(bug);
    });
  }

}
