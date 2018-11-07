import { Component, OnInit } from '@angular/core';
import colorPicker from 'angular-radial-color-picker';
import 'angular-radial-color-picker/dist/css/color-picker.scss';


@Component({
  selector: 'app-colour-picker',
  templateUrl: './colour-picker.component.html',
  styleUrls: ['./colour-picker.component.css']
})
export class ColourPickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
