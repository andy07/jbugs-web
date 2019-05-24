import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BugCreateComponent} from '../bug/bug-create/bug-create.component';
import {UserListComponent} from '../user/user-list/user-list.component';
import {BugListComponent} from '../bug/bug-list/bug-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-bug',
    component: BugCreateComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'bug-list',
    component: BugListComponent
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
    path: 'status-bug',
    component: BugStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
