import {RestRole, Role} from "../../role/models/restRole";

export interface RestUser {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  password: string;
  roles: string[];
}


