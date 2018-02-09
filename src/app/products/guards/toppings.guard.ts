import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

import * as fromStore from '././../store';
import * as fromToppins from './../store/toppings';

@Injectable()
export class ToppingsGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore()
    .pipe(
      catchError(() => of(false))
    );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromToppins.getToppingsCollection)
    .pipe(
      tap(pizzas => {
        if (pizzas.length === 0) {
          this.store.dispatch(new fromToppins.LoadToppings());
        }
      }),
      filter(pizzas => pizzas.length > 0),
      map(() => true),
      take(1)
    );
  }
}
