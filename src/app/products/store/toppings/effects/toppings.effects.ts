import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromActions from './../actions/toppings.actions';
import { ToppingsService } from './../../../services/topping.service';

@Injectable()
export class ToppingsEffects {

  @Effect()
  loadToppings$ = this.actions$
  .ofType(fromActions.LOAD_TOPPINGS)
  .pipe(
    switchMap(() =>
      this.toppingsService
      .getToppings()
      .pipe(
        map(toppings => new fromActions.LoadToppingsSuccess({toppings})),
        catchError(error => of(new fromActions.LoadToppingsFail({errors: [error]})))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}

}
