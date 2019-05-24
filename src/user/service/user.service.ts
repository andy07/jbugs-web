import {Injectable} from '@angular/core';
import {RestUser} from "../models/restUser";
import {BackendService} from "../../assets/backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private backendService: BackendService) { }

  public getAllUsers() : Observable<RestUser[]> {
    return   this.backendService.get('/api/users');
  //     return of([{
  //       firstName:"Viorica",
  //       lastName:"FAdministrator",
  //       email:"admin@admin.com",
  //       mobileNumber:"08343423"
  //     },
  //       {
  //         firstName:"Gelu",
  //         lastName:"Manager",
  //         email:"gelu.simon@admin.com",
  //         mobileNumber:"0987643"
  //       }]).pipe(delay(3000));
  //
  }
}
