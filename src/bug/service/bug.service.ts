import {Injectable} from '@angular/core';
import {BackendService} from '../../assets/backend.service';
import {RestBug} from '../models/restBug';
import {Observable} from 'rxjs';
import {BugStatus} from '../models/bugStatus.model';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backend: BackendService) {
  }

  public save(bug: RestBug): Observable<RestBug> {
    return this.backend.post('/api/bugs', bug);
  }
  /*public getAllBugs(): Observable<RestBug[]> {
   return this.backendService.get('/api/bugs');
 }*/

  public getPostAllAllowedStatus(bugStatus: string): Observable<BugStatus[]> {
    return this.backend.post('/api/bugs/status', bugStatus);
  }

}
