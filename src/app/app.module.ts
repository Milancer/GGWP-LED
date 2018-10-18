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
import { CardContainerComponent } from './card-container/card-container.component';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    BodyContainerComponent,
    ColorPickerComponent,
    RegistrationComponent,
    CardContainerComponent,
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
    MatCardModule,
    MatDialogModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
