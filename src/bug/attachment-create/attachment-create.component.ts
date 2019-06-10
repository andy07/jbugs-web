import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Attachment} from '../models/restBug';

@Component({
  selector: 'app-attachment-create',
  templateUrl: './attachment-create.component.html',
  styleUrls: ['./attachment-create.component.scss']
})
export class AttachmentCreateComponent implements OnInit {

  @Input()
  public attachments: Attachment[];

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  createAttachments(event) {
    if (event.target.files && event.target.files.length) {
      const files: FileList = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        console.log(file.type);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.attachments.push({id: -1, name : file.name, file: reader.result, bugId: -1, type: file.type});
        };
      }
      this.cd.markForCheck();
    }
  }

  remove(attachment: Attachment){
    const index = this.attachments.indexOf(attachment);
    this.attachments.splice(index, 1);
  }
}
