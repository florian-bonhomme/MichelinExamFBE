import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantSmartComponent } from './Restaurant/pages/restaurant-smart/restaurant-smart.component';
import { RestaurantTableComponent } from './Restaurant/components/restaurant-table/restaurant-table.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestaurantService} from "./Restaurant/services/restaurant.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSmartComponent,
    RestaurantTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
