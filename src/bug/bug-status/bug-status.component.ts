import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BugStatus} from "../../user/models/bugStatus.model";
import {BugService} from "../../user/service/bug.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.scss']
})
export class BugStatusComponent implements OnInit {

  private bugStatusList: BugStatus[];


  selected: String= BugStatus.IN_PROGRESS;

  private bugStatusActual: BugStatus = BugStatus.IN_PROGRESS;

  @Output()
  public outputBugsStatus = new EventEmitter<BugStatus>();

  constructor(private bugService: BugService) { }

  ngOnInit() {

    this.bugService.getPostAllAllowedStatus(this.bugStatusActual.valueOf()).subscribe((bugStatusList)=>{
      this.bugStatusList=bugStatusList;
    });

    // this.bugService.getAllAllowedStatus().subscribe((bugStatusList)=>{
    //   this.bugStatusList=bugStatusList;
    // });




    // this.bugStatusList=BugService.getAllAllowedStatus();
  }


}
