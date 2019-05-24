import {Injectable} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BackendService} from '../../assets/backend.service';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  constructor(private backend: BackendService) {
  }

  save(form: NgForm) {
    this.backend.post('', form);
  }
  /*public getAllBugs(): Observable<RestBug[]> {
   return this.backendService.get('/api/bugs');
 }*/
}
