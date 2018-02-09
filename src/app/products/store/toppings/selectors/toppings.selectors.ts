import { createSelector } from '@ngrx/store';

// import * as fromRoot from './../../../../root/store/root.state';
import * as fromPizzas from './../../pizzas';
import { Topping } from './../../../models';
import { ToppingsState } from './../toppings.state';
import { getProductsState } from './../../products.selector';

export const getToppingsState = createSelector(
  getProductsState,
  productsState => productsState.toppings
);

export const getToppingsEntities = createSelector(
  getToppingsState,
  toppingsState => toppingsState.entities
);

export const getToppingsCollection = createSelector(
  getToppingsEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  toppingsState => toppingsState.loading
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

// export const getSelectedPizza = createSelector(
//   getPizzasEntities,
//   fromRoot.getRouterState,
//   (entities, router): Pizza => {
//     return router.state && entities[router.state.params.pizzaId];
//   }
// );
