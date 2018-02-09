import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Pizza } from '../models/pizza.model';

@Injectable()
export class PizzasService {

  path = 'http://localhost:8080/api/pizzas';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(this.path)
      .pipe(
        catchError((error: any) => Observable.throw(error))
      );
  }

  getPizza(pizzaId: number): Observable<Pizza> {
    return this.http
      .get<Pizza>(`${this.path}/${pizzaId}`)
      .pipe(
        catchError((error: any) => Observable.throw(error))
      );
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(`${this.path}`, payload)
      .pipe(
        catchError((error: any) => Observable.throw(error))
      );
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(`${this.path}/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }

  removePizza(payload: Pizza): Observable<any> {
    return this.http
      .delete<any>(`${this.path}/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
