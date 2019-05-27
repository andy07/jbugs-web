export interface User {
  firstname: string;
  lastname: string;
  age: number;
  roles: Role[];
  mobileNumber: number;
  email: string;
}
export enum Role {
  edit_bug = 'edit_bug',
  close_bug = 'close_bug',
  create_bug = 'create_bug'
}
