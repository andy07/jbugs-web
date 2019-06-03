import {Component, Input, OnInit} from '@angular/core';
import {Attachment} from '../models/restBug';

@Component({
  selector: 'app-attachment-create',
  templateUrl: './attachment-create.component.html',
  styleUrls: ['./attachment-create.component.scss']
})
export class AttachmentCreateComponent implements OnInit {

  @Input()
  public attachments: Attachment[];

  constructor() {
  }

  ngOnInit() {
  }

}
