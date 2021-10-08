import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantSmartComponent} from "./Restaurant/pages/restaurant-smart/restaurant-smart.component";
import {RestaurantDetailComponent} from "./Restaurant/pages/restaurant-detail/restaurant-detail.component";

const routes: Routes = [
  {path: "", component: RestaurantSmartComponent},
  {path: "detail", component: RestaurantDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
