import {Component, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from "../models/restBug";

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  private bug:RestBug = new class implements RestBug {
    assignedTo: string;
    createdBy: string;
    description: string;
    fixedVersion: string;
    id: number;
    severity: string;
    status: string;
    targetDate: Date;
    title: string;
    version: string;
  }
  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    this.service.save(this.bug).subscribe((bug) => this.bug = bug);
  }

}
