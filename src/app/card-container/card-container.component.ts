import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(SideBarComponent, {
      width: '100px',
      height: '100px'
    })
    }

  ngOnInit() {
  }

}
