import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ColorPickerModule } from 'ngx-color-picker';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BodyContainerComponent } from './body-container/body-container.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BodyContainerComponent,
    ColorPickerComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
