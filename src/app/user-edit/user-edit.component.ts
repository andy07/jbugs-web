import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      params=>{
        console.log("Params ", params);
        params.get('id');
      }
    )
  }

}
