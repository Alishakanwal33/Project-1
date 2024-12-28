import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrdersType } from './../Models/northwind/orders-type';
import { Northwind } from './../components/static-data/northwind';

@Injectable({
  providedIn: 'root'
})
export class NorthwindService {
  public getOrders(): Observable<OrdersType[]> {
    return of(Northwind['OrdersType']);
  }
}
