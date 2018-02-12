import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { tap, filter, take, switchMap, catchError, map } from 'rxjs/operators';

import * as fromStore from '././../store';
import * as fromPizzas from './../store/pizzas';
import * as fromToppings from './../store/toppings';
import { Pizza } from './../models';

@Injectable()
export class PizzasItemGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore()
    .pipe(
      switchMap(() => {
        const id = parseInt(route.params.pizzaId, 10);
        return this.getPizza(id);
      }),
      tap(pizza => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const ids = pizzaExists
        ? pizza.toppings.map(topping => topping.id)
        : [];
        this.store.dispatch(new fromToppings.VisualiseToppings({ids}));
      }),
      map(pizza => !!pizza),
      catchError(() => of(false))
    );
  }

  getPizza(id: number): Observable<Pizza> {
    return this.store
    .pipe(
      select(fromPizzas.getPizzasEntities),
      map(entities => entities[id]),
      take(1)
    );
  }

  checkStore(): Observable<boolean> {
    return this.store
    .pipe(
      select(fromPizzas.getAllPizzas),
      tap(pizzas => {
        if (pizzas.length === 0) {
          this.store.dispatch(new fromPizzas.LoadPizzas());
        }
      }),
      filter(pizzas => pizzas.length > 0),
      map(() => true),
      take(1)
    );
  }
}
