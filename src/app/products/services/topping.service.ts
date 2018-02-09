import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Topping } from '../models/topping.model';

@Injectable()
export class ToppingsService {

  path = 'http://localhost:8080/api/toppings';

  constructor(private http: HttpClient) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(this.path)
      .pipe(catchError((error: any) => Observable.throw(error)));
  }
}
