import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BugStatus} from "../../user/models/bugStatus.model";
import {BugService} from "../../user/service/bug.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Food} from "../models/Food";

@Component({
  selector: 'app-bug-status',
  templateUrl: './bug-status.component.html',
  styleUrls: ['./bug-status.component.scss']
})
export class BugStatusComponent implements OnInit {



  private bugStatusList: BugStatus[];
  private bugStatusActual: BugStatus = BugStatus.IN_PROGRESS;
  private statusControl = new FormControl(this.bugStatusActual,[Validators.required]);
  private selectValue : BugStatus=this.bugStatusActual;

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

  }


}
