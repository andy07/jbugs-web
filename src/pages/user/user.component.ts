import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {infoToken} from "../login/login.component";
import {infoTokenDecoded} from "../login/token";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  public username: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.getUsername()
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUsername():string{
    let tokenEncoded : string  = localStorage.getItem('token');
    let info:infoTokenDecoded;
    if(tokenEncoded !==null){
      const x = tokenEncoded.split('.');
      // decodific din baza 64 (atob)
      info=JSON.parse(atob(x[1]));
      return info.sub;
    }
    else {
      return 'USER';
    }

  }

}
