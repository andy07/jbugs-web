import {Injectable} from '@angular/core';
import {BackendService} from '../../assets/backend.service';


@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backendService: BackendService) {
  }

  /*public getAllBugs(): Observable<RestBug[]> {
    return this.backendService.get('/api/bugs');
  }*/
}
