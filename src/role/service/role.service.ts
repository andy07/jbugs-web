import {Injectable} from '@angular/core';
import {BackendService} from "../../assets/backend.service";
import {Observable} from "rxjs";
import {RestRole} from "../models/role.model";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private backendService: BackendService) {
  }


  public getAllRoles(): Observable<RestRole[]> {
    return this.backendService.get('/api/roles');
  }


}
