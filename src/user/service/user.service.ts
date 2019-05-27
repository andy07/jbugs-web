import {Injectable} from '@angular/core';
import {RestUser} from '../models/restUser';
import {BackendService} from '../../assets/backend.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendServie: BackendService) { }

  public getAllUsers(): Observable<RestUser[]> {
    return   this.backendServie.get('/api/users');
  }
}
