import {Component, Input, OnInit} from '@angular/core';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-bug-edit',
  templateUrl: './bug-edit.component.html',
  styleUrls: ['./bug-edit.component.scss']
})
export class BugEditComponent implements OnInit {
  @Input()
  private bug: RestBug = new class implements RestBug {
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
  constructor(private bugService: BugService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    console.log('title is ' + title);
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bug = bug;
    });
  }

  public edit() {
    console.log('You sucessfuly edited this bug!');
    this.bugService.update(this.bug).subscribe(data => {
      console.log(data);
    });
  }

  getErrorMessage() {
    return 'You must enter a value';
  }

  redirectToBugList() {
    this.router.navigate(['/bug-list']);
  }
}

