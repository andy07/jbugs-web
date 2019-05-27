import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {
  public bug: RestBug = {
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
  private bugStatus = ['IN_PROGRESS', 'FIXED'];

  constructor(private bugService: BugService) {
  }

  ngOnInit() {
  }

  public edit() {
    console.log('You sucessfuly edited this bug!');
    this.bugService.save(this.bug);
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
