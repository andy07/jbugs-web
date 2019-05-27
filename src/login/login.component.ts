import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {UserService} from "../user/service/user.service";
import {RestUser} from "../user/models/restUser";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username:string;
  public password:string;
  private user:RestUser;
  private errorMessage:string;
  @ViewChild('frm') public userFrm: NgForm;


  constructor(private userService: UserService,private router:Router, public dialog: MatDialog) { }

  ngOnInit() {
  }


  loginUser(formElement: NgForm) {
    console.log(this.username);
    console.log(this.password);
    this.userService.loginUser(this.username,this.password).subscribe(
      (restUser)=>{
        console.log(restUser);
      },
      (error) => {
        this.errorMessage=error.error.message;
        this.dialog.open(PopUpMessageComponent,{width: '500px',height: '100px', data:{data:this.errorMessage}});
        console.log(error.error.message);
      },

      ()=>this.router.navigate(['/home'])

    )
    console.log(this.user);


  }
}

@Component({
  selector: 'app-pop-up-message',
  templateUrl: 'pop-up-message.component.html',
})
export class PopUpMessageComponent {
  public data;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,@Inject(MAT_DIALOG_DATA) data :string ) {
    this.data=data;
    console.log(data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}



