import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  private bug: RestBug = {
    title: 'Doesn\'t work',
    description: 'Pretty reasonable',
    version: '1.2.3.x',
    targetDate: '11.12.2019',
    status: 'new',
    fixedVersion: '',
    severity: 'MUCH',
    createdBy: 'javaMaster',
    assignedTo: 'andy07'
  };
  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public create(form: NgForm) {
    console.log('hero');
    this.service.save(form);
  }

  public getErrorMessage() {
    return 'You must enter a value';
  }
}
