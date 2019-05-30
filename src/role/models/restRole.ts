import {restPermission} from "./restPermission";


export interface RestRole {
  type: string;
  permissions: restPermission[];
}
export enum Role {
  ADM = "Administrator",
  PM= 'Project manager',
  TM = 'Test manager',
  DEV = 'Developer',
  TEST = 'Tester'
}

