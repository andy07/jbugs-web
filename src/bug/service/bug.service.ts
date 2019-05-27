import {Injectable} from '@angular/core';
import {BackendService} from '../../assets/backend.service';
import {RestBug} from '../models/restBug';
import {Observable} from "rxjs";

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
}
