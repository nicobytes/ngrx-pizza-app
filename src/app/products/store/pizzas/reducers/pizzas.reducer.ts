import * as fromActions from './../actions/pizzas.actions';
import { PizzaState } from './../pizzas.state';
import { Pizza } from './../../../models';

const initialState: PizzaState = {
  entities: {},
  errors: [],
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromActions.PizzasActions
): PizzaState {
  switch (action.type) {
    case fromActions.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.LOAD_PIZZAS_SUCCESS: {
      const pizzas = action.payload.pizzas
      .reduce((entities: {[id: number ]: Pizza}, pizza: Pizza) => {
        return {
          ...entities,
          [pizza.id]: pizza
        };
      }, {});
      return {
        entities: pizzas,
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

    case fromActions.UPDATE_PIZZA_SUCCESS:
    case fromActions.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload.pizza;
      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities,
      };
    }

    case fromActions.REMOVE_PIZZA_SUCCESS: {
      const pizza = action.payload.pizza;
      const { [pizza.id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
      };
    }
  }

  return state;
}
