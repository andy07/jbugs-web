import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  private bug = {
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
  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.service.save(this.bug).subscribe((bug) => this.bug = bug);
  }

}
