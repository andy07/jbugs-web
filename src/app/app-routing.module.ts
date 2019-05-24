import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {BugCreateComponent} from '../bug/bug-create/bug-create.component';
import {BugStatusComponent} from "../bug/bug-status/bug-status.component";

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
    path: 'users',
    component: LoginComponent,
  },{
    path: 'status-bug',
    component: BugStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
