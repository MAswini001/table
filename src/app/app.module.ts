import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import{MatTableDataSource, MatTableModule}from  '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule } from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
