export interface User {
  firstName: string;
  lastName: string;
  email: string;
  mobileNumber: string;
  roles: Role[];
}
export enum Role {
  edit_bug="edit_bug",
  close_bug="close_bug",
  create_bug="create_bug"
}
