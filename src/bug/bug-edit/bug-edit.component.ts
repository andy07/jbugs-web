import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {
  private bug: RestBug = {
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

  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public edit() {
    this.service.save(this.bug);
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
