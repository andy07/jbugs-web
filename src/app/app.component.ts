import {Component, ViewChild} from '@angular/core';
import {User} from '../user/models/user.model';
import {RestUser} from '../user/models/restUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Andrei';
  titleApp = 'Title 2';

  @ViewChild('userComponent')
  public userComponent;

  public users: User[] = [];

  alertUserFromList(user: RestUser) {
    alert(user.firstName);
  }

  alertUserChildComponent() {
    alert(this.userComponent.user.firstname);
  }
}
