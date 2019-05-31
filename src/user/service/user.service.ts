import {Injectable} from '@angular/core';
import {BackendService} from '../../assets/backend.service';
import {Observable} from 'rxjs';
import {RestUser} from '../models/restUser';
import {Token} from "../../pages/login/token";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) { }

  public getAllUsers(): Observable<RestUser[]> {
    return this.backendService.get('/api/users');
  }

  public save(user: RestUser): Observable<RestUser> {
    return this.backendService.post('/api/users', user);
  }

  public loginUser(username: string, password: string): Observable<Token> {
    return this.backendService.post('/api/users/login', {username, password});
  }

  public loggedIn():boolean{
    if(localStorage.getItem('token') === null){
      return false;
    }
    else
      return true;
  }

}
