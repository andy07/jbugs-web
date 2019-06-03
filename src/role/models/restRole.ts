import {RestPermission} from "./restPermission";


export interface RestRole {
  type: string;
  permissions: RestPermission[];
}

export enum Role {
  admFrontEnd = "Administrator",
  pmFrontEnd = 'Project manager',
  tmFrontEnd = 'Test manager',
  devFrontEnd = 'Developer',
  testFrontEnd = 'Tester',
  admBackEnd = 'ADM',
  pmBackEnd = 'PM',
  tmBackEnd = 'TM',
  devBackEnd = 'DEV',
  testBackEnd = 'TEST',

}


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

export class RoleConverter{

  static frontEndToBackEnd(from:string):Role{
    if(from===Role.admFrontEnd)
      return Role.admBackEnd;
    else if(from===Role.pmFrontEnd)
      return Role.pmBackEnd;
    else if(from===Role.tmFrontEnd)
      return Role.tmBackEnd;
    else if(from===Role.devFrontEnd)
      return Role.devBackEnd;
    else if(from===Role.testFrontEnd)
      return Role.testBackEnd;
  }
  static backEndToFrontEnd(from:string):Role{
    if(from===Role.admBackEnd)
      return Role.admFrontEnd;
    else if(from===Role.pmBackEnd)
      return Role.pmFrontEnd;
    else if(from===Role.tmBackEnd)
      return Role.tmFrontEnd;
    else if(from===Role.devBackEnd)
      return Role.devFrontEnd;
    else if(from===Role.testBackEnd)
      return Role.testFrontEnd;
  }



}


