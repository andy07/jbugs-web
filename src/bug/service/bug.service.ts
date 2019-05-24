import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BackendService} from '../../assets/backend.service';
import {Observable} from "rxjs";
import {BugStatus} from "../models/bugStatus.model";

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backendService: BackendService) {
  }

  save(form: NgForm) {
    this.backendService.post('', form);
  }
  /*public getAllBugs(): Observable<RestBug[]> {
   return this.backendService.get('/api/bugs');
 }*/

  public getPostAllAllowedStatus(bugStatus: String) : Observable<BugStatus[]> {
    return   this.backendService.post('/api/bugs/status',bugStatus);
  }

}
