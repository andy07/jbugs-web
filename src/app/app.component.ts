import {Component} from '@angular/core';
import {infoTokenDecoded} from '../pages/login/token';

export let infoToken: infoTokenDecoded;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const encoded = localStorage.getItem('token');
    if (encoded) {
      infoToken = JSON.parse(atob(encoded.split('.')[1]));
    }
  }
}
