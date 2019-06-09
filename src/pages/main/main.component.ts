import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private snackBar: MatSnackBar){}
  ngOnInit(): void {
  }

  awesome(){
    this.snackBar.open('We like you too!', 'Awesome!', {
      duration: 20000
    });
  }
}
