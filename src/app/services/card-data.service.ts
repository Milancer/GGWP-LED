import { group } from '@angular/animations';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardDataService {

  group = []

  constructor() { 

  }

  groupPush(value,test){
    this.group.push({header: value, body: value})
    // this.group.push(value);
    console.log(this.group);
  }

}


