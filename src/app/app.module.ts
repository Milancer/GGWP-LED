import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { ColorPickerContainerComponent } from './color-picker-container/color-picker-container.component';
import { DeskContainerComponent } from './desk-container/desk-container.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyContainerComponent,
    ColorPickerContainerComponent,
    DeskContainerComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    ColorPickerModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: ColorPickerContainerComponent 
      },
      { 
        path: 'deskregistration', 
        component: DeskContainerComponent 
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
