import {Component, ViewChild} from '@angular/core';
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

  public users: RestUser[] = [];

  alertUserFromList(user: RestUser) {
    alert(user.firstName);
  }

  alertUserChildComponent() {
    alert(this.userComponent.user.firstname);
  }
}
