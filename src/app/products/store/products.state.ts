import { ActionReducerMap } from '@ngrx/store';
import * as fromPizzas from './pizzas';
import * as fromToppings from './toppings';

export interface ProductsState {
  pizzas: fromPizzas.PizzasState;
  toppings: fromToppings.ToppingsState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer,
  toppings: fromToppings.reducer,
};
