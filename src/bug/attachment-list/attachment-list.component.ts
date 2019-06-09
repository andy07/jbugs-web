import {Component, Input, OnInit} from '@angular/core';
import {Attachment} from "../models/restBug";
import {saveAs} from 'file-saver'

@Component({
  selector: 'app-attachment-list',
  templateUrl: './attachment-list.component.html',
  styleUrls: ['./attachment-list.component.scss']
})
export class AttachmentListComponent implements OnInit {

  @Input()
  public attachments: Attachment[];

  constructor() { }

  ngOnInit() {
  }

  save(attachment: Attachment){
    saveAs(attachment.file, attachment.name);
  }
}
