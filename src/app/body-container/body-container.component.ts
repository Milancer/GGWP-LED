import { CardDataService } from './../services/card-data.service';
import { group } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-body-container',
  templateUrl: './body-container.component.html',
  styleUrls: ['./body-container.component.css']
})
export class BodyContainerComponent implements OnInit {

  constructor(public dialog: MatDialog, private groupData: CardDataService) { }

  groups

  addGroup(value){
    this.groupData.groupPush(value)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.groups = this.groupData.group
  }

}
