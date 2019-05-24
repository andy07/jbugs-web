import { Injectable } from '@angular/core';
import {BackendService} from "../../assets/backend.service";
import {Observable} from "rxjs";
import {BugStatus} from "../models/bugStatus.model";
import {RestUser} from "../models/restUser";

@Injectable({
  providedIn: 'root'
})
export class BugService {

  // private static bugStatusList: BugStatus[]=[
  //   BugStatus.FIXED,
  //   BugStatus.CLOSED
  // ];

  constructor(private backendService: BackendService) { }

  // public getAllAllowedStatus() : Observable<BugStatus[]> {
  //   return this.backendService.get('/api/bugs/status');
  // }

  // public static getAllAllowedStatus() : BugStatus[] {
  //   return this.bugStatusList;
  //
  // }

  public getAllAllowedStatus() : Observable<BugStatus[]> {
    return   this.backendService.get('/api/bugs/status');
  }

  public getPostAllAllowedStatus(bugStatus: String) : Observable<BugStatus[]> {
    return   this.backendService.post('/api/bugs/status',bugStatus);
  }


}
