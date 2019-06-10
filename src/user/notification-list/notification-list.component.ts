import { Component, OnInit } from '@angular/core';
import {RestNotification} from "../models/restNotification";
import {NotificationService} from "../service/notification.service";

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  public notifications: RestNotification[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getAll().subscribe(data => {
      this.notifications = data;
    })
  }

  getIcon(notification: RestNotification) {
    return 'home';
  }
}
