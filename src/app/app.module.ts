import { FormsModule } from '@angular/forms';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatSliderModule, MatFormFieldModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { GestureConfig } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';
import { BodyContainerComponent } from './body-container/body-container.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { MatCardModule, MatDialogModule, MatInputModule, MatListModule, MatTabsModule,MatTableModule} from '@angular/material/';
import { DataTableComponent } from './data-table/data-table.component';
import { DialogComponent } from './dialog/dialog.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ColourPickerComponent } from './colour-picker/colour-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyContainerComponent,
    CardContainerComponent,
    DataTableComponent,
    DialogComponent,
    SideBarComponent,
    ColourPickerComponent,
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
    FormsModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent,]
})
export class AppModule { }
