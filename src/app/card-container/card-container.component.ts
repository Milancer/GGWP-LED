import { CardDataService } from './../services/card-data.service';
import { BodyContainerComponent } from './../body-container/body-container.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { group } from '@angular/animations';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  @Input() currentGroup: any;

  constructor(private dialog: MatDialog) { }

  //groups = this.group.group

  openDialog(){
    const dialogRef = this.dialog.open(DataTableComponent, {
      width: '300px',
      height: '300px'
      
    })
  }

  ngOnInit() {
  
  }

}



