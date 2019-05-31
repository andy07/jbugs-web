import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RoleService} from "../service/role.service";
import {RestBug} from "../../bug/models/restBug";
import {restPermission} from "../models/restPermission";
import {Observable} from "rxjs";
import {BugStatus} from "../../bug/models/bugStatus.model";
import {BugService} from "../../bug/service/bug.service";
import {EnumRoles, RestRole, RoleConverter, Roles} from "../models/restRole";
import {MatAutocompleteSelectedEvent} from "@angular/material";

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ElementRef, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {map, startWith} from 'rxjs/operators';





@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss']
})
export class RolePermissionComponent implements OnInit {


  public roleList: RestRole[];
  displayedColumns: string[] = ['type', 'permission','star'];


  @Output()
  public outputFromBackend = new EventEmitter<RestRole>();


  panelOpenState = false;

  // constructor(private roleService : RoleService){
  //
  // }

  ngOnInit(): void {

    this.roleService.getAllRoles().subscribe((roleList) => {
      roleList.forEach(s => {
        s.type = RoleConverter.backEndToFrontEnd(s.type);
      });
      this.roleList = roleList;
      console.log(roleList);
    });
    // console.log((<EnumRoles>Roles['ADM']).display);
    // console.log((<EnumRoles>Roles['ADM']).variable);
  }


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<restPermission[]>;
  //fruits: string[] = [];
  allFruits: restPermission[] = [];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private roleService : RoleService) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: restPermission | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }


  remove(fruit: restPermission, restRoel: RestRole): void {
    const index = restRoel.permissions.indexOf(fruit);

    if (index >= 0) {
      for(let i=0;i<this.roleList.length;i++){
        if(this.roleList[i].type===restRoel.type){
          this.roleList[i].permissions.splice(index, 1);
        }
      }
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {

    // for(let i=0;i<this.roleList.length;i++){
    //   if(this.roleList[i].type===restRole.type){
    //     this.roleList[i].permissions.push(event.option.viewValue);
    //     this.fruitInput.nativeElement.value = '';
    //     this.fruitCtrl.setValue(null);
    //   }
    // }

  }

  private _filter(value: restPermission): restPermission[] {
    const filterValue = value.type.toLowerCase();

    return this.allFruits.filter(fruit => fruit.type.toLowerCase().indexOf(filterValue) === 0);
  }




}
