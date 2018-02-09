import * as fromActions from './../actions/toppings.actions';
import { ToppingsState } from './../toppings.state';
import { Topping } from './../../../models/topping.model';

const initialState: ToppingsState = {
  entities: {},
  errors: [],
  loading: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: fromActions.ToppingsActions
): ToppingsState {
  switch (action.type) {
    case fromActions.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromActions.LOAD_TOPPINGS_SUCCESS: {

      const toppings = action.payload.toppings
      .reduce((entities: {[id: number ]: Topping}, topping: Topping) => {
        return {
          ...entities,
          [topping.id]: topping
        };
      }, {});
      return {
        ...state,
        entities: toppings,
        errors: [],
        loading: false,
      };
    }

    case fromActions.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        errors: action.payload.errors,
        loading: false,
      };
    }

    case fromActions.VISUALISE_TOPPINGS: {
      return {
        ...state,
        selectedToppings: action.payload.ids,
      };
    }
  }

  return state;
}
