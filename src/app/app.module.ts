import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LaunchesComponent } from './launches/launches.component';
import { MainComponent } from './main/main.component';
import { RocketDataComponent } from './rocket-data/rocket-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RocketDataDialogComponent } from './rocket-data-dialog/rocket-data-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RocketsComponent,
    LaunchesComponent,
    MainComponent,
    RocketDataComponent,
    RocketDataDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
