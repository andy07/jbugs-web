import {restPermission} from "./permission.model";


export interface RestRole {
  type: string;
  permissions: restPermission[];
}

export enum Role {
  ADM = "Administrator",
  PM = 'Project manager',
  TM = 'Test manager',
  DEV = 'Developer',
  TEST = 'Tester'



}

//   public key:string;
//   public String value;
//
//   public Role(String key, String value){
//     this.key = key;
//     this.value = value;
// }


export let Roles = {
  ADM:  {variable: 'ADM', display: 'Administrator' },
  PM:  {variable: 'PM', display: 'Project manager' },
  TM:  {variable: 'TM', display: 'Test manager' },
  DEV:  {variable: 'DEV', display: 'Developer' },
  TEST: {variable: 'TEST', display: 'Tester' }
}


export interface EnumRoles {
  variable: string;
  display: string;
}


