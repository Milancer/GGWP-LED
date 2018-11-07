import { TableDataService } from './../services/table-data.service';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'data-table',
  styleUrls: ['data-table.component.css'],
  templateUrl: 'data-table.component.html',
})
export class DataTableComponent {
  constructor(private tableData: TableDataService) {
    
  }
  displayedColumns: string[] = ['index', 'name', 'red', 'blue', 'green', 'color'];
  dataSource = this.tableData.tableData
}
