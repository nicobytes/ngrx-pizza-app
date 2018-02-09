import { Topping } from './../../models/topping.model';

export interface ToppingsState {
  entities: { [id: number]: Topping };
  errors: string[];
  loading: boolean;
  selectedToppings: number[];
}
