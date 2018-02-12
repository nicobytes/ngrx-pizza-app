import { createSelector } from '@ngrx/store';

import * as fromRoot from './../../../../root/store';
import { Pizza } from './../../../models';
import { PizzasState, pizzasAdapter } from './../pizzas.state';
import { getProductsState } from './../../products.selector';

export const getPizzasState = createSelector(
  getProductsState,
  productsState => productsState.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzasState,
  pizzasAdapter.getSelectors().selectEntities
);

export const getAllPizzas = createSelector(
  getPizzasState,
  pizzasAdapter.getSelectors().selectAll
);

export const getTotalPizzas = createSelector(
  getPizzasState,
  pizzasAdapter.getSelectors().selectTotal
);

export const getPizzasLoading = createSelector(
  getPizzasState,
  pizzasState => pizzasState.loading
);

export const getPizzasErrors = createSelector(
  getPizzasState,
  pizzasState => pizzasState.errors
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRouterState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId];
  }
);
