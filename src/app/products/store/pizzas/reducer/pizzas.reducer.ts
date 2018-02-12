import * as fromActions from './../actions/pizzas.actions';
import { PizzasState, pizzasAdapter } from './../pizzas.state';
import { Pizza } from './../../../models';

const initialState: PizzasState = pizzasAdapter.getInitialState({
  errors: [],
  loading: false,
});

export function reducer(
  state = initialState,
  action: fromActions.PizzasActions
): PizzasState {
  switch (action.type) {
    case fromActions.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload.pizzas;
      return {
        ...pizzasAdapter.addAll(pizzas, state),
        errors: [],
        loading: false,
      };
    }

    case fromActions.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
      };
    }

    case fromActions.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload.pizza;
      return pizzasAdapter.addOne(pizza, state);
    }

    case fromActions.UPDATE_PIZZA_SUCCESS: {
      const update = action.payload;
      return pizzasAdapter.updateOne(update, state);
    }

    case fromActions.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload.pizza;
      return pizzasAdapter.removeOne(pizza.id, state);
    }
  }

  return state;
}
