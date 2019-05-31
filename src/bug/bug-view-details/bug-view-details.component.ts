import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BugService} from '../service/bug.service';
import {RestBug} from '../models/restBug';

@Component({
  selector: 'app-bug-view-details',
  templateUrl: './bug-view-details.component.html',
  styleUrls: ['./bug-view-details.component.scss']
})
export class BugViewDetailsComponent implements OnInit {

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
  };

  constructor(private bugService: BugService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  redirectToBugList() {
    this.router.navigate(['home/bugs/bug-list']);
  }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    console.log('title is ' + title);
    this.bugService.getBugByTitle(title).subscribe((bug) => {
      this.bug = bug;
    });
  }


}
