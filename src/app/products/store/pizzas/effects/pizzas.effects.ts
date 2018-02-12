import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from './../../../../root/store';
import * as fromActions from './../actions/pizzas.actions';
import { PizzasService } from './../../../services/pizzas.service';

@Injectable()
export class PizzasEffects {

  @Effect()
  loadPizzas$ = this.actions$
  .pipe(
    ofType(fromActions.LOAD_PIZZAS),
    switchMap(() =>
      this.pizzasService
      .getPizzas()
      .pipe(
        map(pizzas => new fromActions.LoadPizzasSuccess({pizzas})),
        catchError(error => of(new fromActions.LoadPizzasFail({errors: [error]})))
      )
    )
  );

  @Effect()
  createPizza$ = this.actions$.pipe(
    ofType(fromActions.CREATE_PIZZA),
    map((action: fromActions.CreatePizza) => action.payload),
    switchMap(payload => {
      return this.pizzasService
        .createPizza(payload.pizza)
        .pipe(
          map(pizza => new fromActions.CreatePizzaSuccess({pizza})),
          catchError(error => of(new fromActions.CreatePizzaFail({errors: [error]})))
        );
    })
  );


  @Effect()
  updatePizza$ = this.actions$.pipe(
    ofType(fromActions.UPDATE_PIZZA),
    map((action: fromActions.UpdatePizza) => action.payload),
    switchMap(payload => {
      return this.pizzasService
        .updatePizza(payload.pizza)
        .pipe(
          map(pizza => new fromActions.UpdatePizzaSuccess({id: pizza.id, changes: pizza})),
          catchError(error => of(new fromActions.UpdatePizzaFail({errors: [error]})))
        );
    })
  );

  @Effect()
  removePizza$ = this.actions$.pipe(
    ofType(fromActions.REMOVE_PIZZA),
    map((action: fromActions.RemovePizza) => action.payload),
    switchMap(payload => {
      return this.pizzasService
        .removePizza(payload.pizza)
        .pipe(
          map(() => new fromActions.RemovePizzaSuccess({pizza: payload.pizza})),
          catchError(error => of(new fromActions.RemovePizzaFail({errors: [error]})))
        );
    })
  );

  @Effect()
  handlePizzaSuccess$ = this.actions$
    .pipe(
      ofType(
        fromActions.CREATE_PIZZA_SUCCESS,
        fromActions.UPDATE_PIZZA_SUCCESS,
        fromActions.REMOVE_PIZZA_SUCCESS
      ),
      map(pizza => {
        return new fromRoot.Go({
          path: ['/products'],
        });
      })
    );

  constructor(
    private actions$: Actions,
    private pizzasService: PizzasService
  ) {}

}
