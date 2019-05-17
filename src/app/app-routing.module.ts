import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UsersComponent} from "./users/users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {BugsComponent} from "./bugs/bugs.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'users/:id',
    component: UserEditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'bugs',
    component: BugsComponent
  },
  {
    path: 'users',
    component: UsersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
