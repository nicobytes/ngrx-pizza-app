import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

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

  constructor(
    private actions$: Actions,
    private pizzasService: PizzasService
  ) {}

}
