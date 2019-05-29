import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../pages/login/login.component';
import {BugCreateComponent} from '../bug/bug-create/bug-create.component';
import {BugListComponent} from '../bug/bug-list/bug-list.component';
import {BugEditComponent} from '../bug/bug-edit/bug-edit.component';
import {AddUserComponent} from '../user/add-user/add-user.component';
import {HomeComponent} from '../pages/home/home.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {MainComponent} from '../pages/main/main.component';
import {EditUserComponent} from '../user/edit-user/edit-user.component';
import {RolePermissionComponent} from "../role/role-permission/role-permission.component";
import {AddPermissionRoleComponent} from "../role/add-permission-role/add-permission-role.component";
import {DeletePermissionRoleComponent} from "../role/delete-permission-role/delete-permission-role.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main',
        component: MainComponent
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            redirectTo: 'user-list',
            pathMatch: 'full'
          },
          {
            path: 'user-list',
            component: UserListComponent
          },
          {
            path: 'user-add',
            component: AddUserComponent
          },
          {
            path: 'user-edit',
            component: EditUserComponent
          }
        ]
      },
      {
        path: 'bugs',
        children: [
          {
            path: '',
            redirectTo: 'bug-list',
            pathMatch: 'full'
          },
          {
            path: 'bug-list',
            component: BugListComponent
          },
          {
            path: 'bug-create',
            component: BugCreateComponent
          },
          {
            path: 'bug-edit/:title',
            component: BugEditComponent
          }
        ]
      },
      {
        path: 'roles',
        children: [
          {
            path: '',
            redirectTo: 'role-list',
            pathMatch: 'full'
          },
          {
            path: 'role-list',
            component: RolePermissionComponent
          },
          {
            path: 'add-permission-role/:type',
            component: AddPermissionRoleComponent
          },
          {
            path: 'delete-permission-role/:type',
            component: DeletePermissionRoleComponent
          }

        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
