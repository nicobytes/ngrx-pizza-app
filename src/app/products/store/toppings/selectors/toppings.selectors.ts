import { createSelector } from '@ngrx/store';

import * as fromPizzas from './../../pizzas';
import { Topping } from './../../../models';
import { ToppingsState, toppingsAdapter } from './../toppings.state';
import { getProductsState } from './../../products.selector';

export const getToppingsState = createSelector(
  getProductsState,
  productsState => productsState.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  toppingsAdapter.getSelectors().selectEntities
);

export const getAllToppings = createSelector(
  getToppingsState,
  toppingsAdapter.getSelectors().selectAll
);

export const getTotalToppings = createSelector(
  getToppingsState,
  toppingsAdapter.getSelectors().selectTotal
);

export const getToppingsErrors = createSelector(
  getToppingsState,
  toppingsState => toppingsState.errors
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  toppingsState => toppingsState.selectedToppings
);

export const getPizzaVisualised = createSelector(
  fromPizzas.getSelectedPizza,
  getToppingsEntities,
  getSelectedToppings,
  (pizza, toppingsEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingsEntities[id]);
    return {
      ...pizza,
      toppings
    };
  }
);
