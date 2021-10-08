import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";
import {Restaurant} from "../models/restaurant.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class RestaurantService{

  private restaurants: BehaviorSubject<Restaurant[]> = new  BehaviorSubject<Restaurant[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadRestaurants();
  }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.restaurants;
  }

  public loadRestaurants(): void {
    this.httpClient.get<Restaurant[]>("http://localhost:3000/restaurants").subscribe(value => this.restaurants.next(value))

  }
}
