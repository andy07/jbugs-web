import {Injectable} from '@angular/core';
import {BackendService} from '../../assets/backend.service';
import {Observable} from 'rxjs';
import {BugStatus} from '../models/bugStatus.model';
import {RestBug} from '../models/restBug';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backendService: BackendService) {
  }

  public getAllBugs(): Observable<RestBug[]> {
    return this.backendService.get('/api/bugs');
  }


  public getPostAllAllowedStatus(bugStatus: string): Observable<BugStatus[]> {
    return this.backendService.get(`/api/bugs/status/${bugStatus}`);
  }


  public save(bug: RestBug): Observable<RestBug> {
    return this.backendService.post('/api/bugs', bug);
  }



  public update(bug: RestBug): Observable<RestBug> {
    return this.backendService.put(`/api/bugs/${bug.title}`, bug);
  }



  public getBugByTitle(title: string): Observable<RestBug> {
    return this.backendService.get(`/api/bugs/${title}`);
  }

  public getBugByTitleToExportPDF(title: string): Observable<RestBug> {
    return this.backendService.get(`/api/bugs/bug-pdf/${title}`);
  }
  public getNoBugsByStatus(status: string): Observable<string> {
    return this.backendService.get(`/api/bugs/status/no/${status}`);
  }

}
