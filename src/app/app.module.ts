import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BugModule} from '../bug/bug.module';
import {UserModule} from '../user/user.module';
import {LoginComponent, PopUpMessageComponent} from '../login/login.component';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HomeComponent } from '../home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material';
import { MatListModule, MatSelectModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PopUpMessageComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatListModule,
    MatButtonModule,
    BugModule,
    UserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule
  ],
  entryComponents:[PopUpMessageComponent],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})


export class AppModule {
}
