
export interface RestUser {
  firstName: string;
  lastName : string;
  email: string;
  mobileNumber: string;
  password: string;
  roles: Role[];
}

export enum Role {
  edit_bug = 'edit_bug',
  close_bug = 'close_bug',
  create_bug = 'create_bug'
}
