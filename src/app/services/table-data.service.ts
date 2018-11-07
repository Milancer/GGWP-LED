import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableDataService {

  tableData  = [
    {index: 1, name: 'Arduino 1', red: 255, green: 255, blue: 255 },
    {index: 2, name: 'Arduino 2', red: 255, green: 255, blue: 255 },
    {index: 3, name: 'Arduino 3', red: 255, green: 255, blue: 255 },
    {index: 4, name: 'Arduino 4', red: 255, green: 255, blue: 255 },
    {index: 5, name: 'Arduino 5', red: 255, green: 255, blue: 255 },
  ];

  constructor() { 
    interface tableData {
      name: string;
      index: number;
      red: number;
      green: number;
      blue: number;
    }
  }
  
  addTable(index,name,red,green,blue){
    this.tableData.push({
      'index': index,
      'name': name, 
      'red': red, 
      'blue': blue, 
      'green': green,
    })
  }
}
