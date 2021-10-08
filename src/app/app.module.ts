import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantSmartComponent } from './Restaurant/pages/restaurant-smart/restaurant-smart.component';
import { RestaurantTableComponent } from './Restaurant/components/restaurant-table/restaurant-table.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RestaurantService} from "./Restaurant/services/restaurant.service";
import { RestaurantFormComponent } from './Restaurant/components/restaurant-form/restaurant-form.component';
import { RestaurantDetailComponent } from './Restaurant/pages/restaurant-detail/restaurant-detail.component';
import { RestaurantEditComponent } from './Restaurant/components/restaurant-edit/restaurant-edit.component';
import {ColorsDirective} from "./shared/directives/colors.directive";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantSmartComponent,
    RestaurantTableComponent,
    RestaurantFormComponent,
    RestaurantDetailComponent,
    RestaurantEditComponent,
    ColorsDirective
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
