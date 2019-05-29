import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BugCreateComponent} from '../bug/bug-create/bug-create.component';
import {BugListComponent} from '../bug/bug-list/bug-list.component';
import {BugStatusComponent} from '../bug/bug-status/bug-status.component';
import {BugEditComponent} from '../bug/bug-edit/bug-edit.component';
import {AddUserComponent} from '../user/add-user/add-user.component';
import {HomeComponent} from "../home/home.component";
import {UserListComponent} from '../user/user-list/user-list.component';
import {RolePermissionComponent} from "../role/role-permission/role-permission.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {path: 'home', component: HomeComponent}
    ]
  },
  {path: 'home', component: HomeComponent},
  {
    path: 'users/:id',
    component: LoginComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'users',
    component: LoginComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent
  },
  {
    path: 'create-bug',
    component: BugCreateComponent
  },
  {
    path: 'edit-bug',
    component: BugEditComponent
  },
  {
    path: 'bug-list',
    component: BugListComponent
  },
  {
    path: 'status-bug',
    component: BugStatusComponent
  },
  {
    path: 'roles',
    component: RolePermissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
