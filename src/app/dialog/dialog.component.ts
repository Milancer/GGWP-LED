import { TestBed } from '@angular/core/testing';
import { CardDataService } from './../services/card-data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  groupName;

  constructor(public dialogRef: MatDialogRef<DialogComponent>, private groupData: CardDataService) { }


  addGroup(value){
    this.groupData.groupPush(value);
  }

  close(){
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
