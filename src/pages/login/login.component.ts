import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../user/service/user.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {infoTokenDecoded, Token} from "./token";


export var infoToken:infoTokenDecoded;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;
  @ViewChild('frm') public userFrm: NgForm;


  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit() {
  }


  loginUser() {


    this.userService.loginUser(this.username, this.password).subscribe(
      (token) => {
        localStorage.setItem('token',token.token);
        this.initializeInfoToken(token.token);
      },
      (error) => {
        this.dialog.open(PopUpMessageComponent, {width: '500px', height: '100px', data: {data: error.error.message}});
      },

      () => this.router.navigate(['/home'])
    );

  }

  private initializeInfoToken( tokenEncoded: string) {
    let x = tokenEncoded.split(".");
    //decodific din baza 64 (atob)
    infoToken=JSON.parse(atob(x[1]));
    console.log(infoToken);
  }
}

@Component({
  selector: 'app-pop-up-message',
  templateUrl: 'pop-up-message.component.html',
})
export class PopUpMessageComponent {
  public data;

  constructor(public dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) data: string) {
    this.data = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}





