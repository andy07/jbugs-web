import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BugModule} from '../bug/bug.module';
import {UserModule} from '../user/user.module';
import {LoginComponent} from '../login/login.component';
<<<<<<< HEAD
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
=======
>>>>>>> parent of d1d16fb... + Bug-Create

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BugModule,
    UserModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatTableModule
=======
>>>>>>> parent of d1d16fb... + Bug-Create
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule {
}
