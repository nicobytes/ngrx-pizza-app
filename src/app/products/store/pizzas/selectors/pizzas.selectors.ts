import { createSelector } from '@ngrx/store';

import * as fromRoot from './../../../../root/store/root.state';
import { Pizza } from './../../../models';
import { PizzaState } from './../pizzas.state';
import { getProductsState } from './../../products.selector';

export const getPizzasState = createSelector(
  getProductsState,
  productsState => productsState.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzasState,
  pizzasState => pizzasState.entities
);

export const getPizzasCollection = createSelector(
  getPizzasEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
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
