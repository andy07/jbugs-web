import {Component} from '@angular/core';
import {RestUser} from '../user/models/restUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Andrei';

  user: RestUser = {
    firstName: 'Silviu',
    lastName: 'Cucuiet',
    email: '',
    mobileNumber: '',
    password: '',
    roles: []
  };
}
