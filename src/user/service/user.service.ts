import {Injectable} from '@angular/core';
import {RestUser} from "../models/restUser";
import {BackendService} from "../../assets/backend.service";
import {Observable} from "rxjs";

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

  public loginUser(username:String, password:String) : Observable<RestUser> {
    return   this.backendService.post('/api/users/login',{username,password});
  }
}
