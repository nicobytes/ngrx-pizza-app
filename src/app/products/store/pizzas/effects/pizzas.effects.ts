import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromRoot from './../../../../root/store';
import * as fromActions from './../actions/pizzas.actions';
import { PizzasService } from './../../../services/pizzas.service';

@Injectable()
export class PizzasEffects {

  @Effect()
  loadPizzas$ = this.actions$
  .ofType(fromActions.LOAD_PIZZAS)
  .pipe(
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
  createPizza$ = this.actions$.ofType(fromActions.CREATE_PIZZA).pipe(
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
  updatePizza$ = this.actions$.ofType(fromActions.UPDATE_PIZZA).pipe(
    map((action: fromActions.UpdatePizza) => action.payload),
    switchMap(payload => {
      return this.pizzasService
        .updatePizza(payload.pizza)
        .pipe(
          map(pizza => new fromActions.UpdatePizzaSuccess({pizza})),
          catchError(error => of(new fromActions.UpdatePizzaFail({errors: [error]})))
        );
    })
  );

  @Effect()
  removePizza$ = this.actions$.ofType(fromActions.REMOVE_PIZZA).pipe(
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
    .ofType(
      fromActions.CREATE_PIZZA_SUCCESS,
      fromActions.UPDATE_PIZZA_SUCCESS,
      fromActions.REMOVE_PIZZA_SUCCESS
    )
    .pipe(
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
