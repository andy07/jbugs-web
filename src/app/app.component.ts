import {Component, ViewChild} from '@angular/core';
import {Role, User} from "../user/models/user.model";
import {RestUser} from "../user/models/restUser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Andrei';
  titleApp='Title 2';

  @ViewChild('userComponent')
  public userComponent;

  public users: User[]= [
    {
      firstname : "Perry",
      lastname : "Cox",
      age : 48,
      roles : [Role.create_bug]
    },
    {
      firstname : "John",
      lastname : "Dorian",
      age : 29,
      roles : [Role.create_bug]
    },
    {
      firstname : "Carla",
      lastname : "Espinosa",
      age : 32,
      roles : [Role.create_bug]
    },
    {
      firstname : "Elliot",
      lastname : "Reid",
      age : 25,
      roles : [Role.create_bug]
    }
  ]
  public newUser : User ={
    firstname : "Zsombor",
    lastname : "Reid",
    age : 25,
    roles : [Role.create_bug, Role.edit_bug]
  }

  alertUserFromList(user:RestUser){
    alert(user.firstName);
  }

  alertUserChildComponent(){
    alert(this.userComponent.user.firstname);
  }
}
