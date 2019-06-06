import {Component, OnInit} from '@angular/core';
import {infoToken} from "../login/login.component";
import {EnumPermission} from "../../role/models/restPermission";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  verifyUserPermission(): boolean {

    for (let i = 0; i < infoToken.permissions.length; i++) {
      if (infoToken.permissions[i] === EnumPermission[EnumPermission.PERMISSION_MANAGEMENT]) {
        return true;
      }
    }
    return false;
  }

}
