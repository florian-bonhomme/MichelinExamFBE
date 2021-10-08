import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantSmartComponent } from './Restaurant/pages/restaurant-smart/restaurant-smart.component';
import { RestaurantTableComponent } from './Restaurant/components/restaurant-table/restaurant-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSmartComponent,
    RestaurantTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
