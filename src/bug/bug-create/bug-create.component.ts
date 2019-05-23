import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BugService} from '../service/bug.service';

@Component({
  selector: 'app-bug-create',
  templateUrl: './bug-create.component.html',
  styleUrls: ['./bug-create.component.scss']
})
export class BugCreateComponent implements OnInit {

  constructor(private service: BugService) {
  }

  ngOnInit() {
  }

  public create(form: NgForm) {
    this.service.save(form);
  }
}
