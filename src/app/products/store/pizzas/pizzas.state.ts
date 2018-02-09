import { Pizza } from './../../models/pizza.model';

export interface PizzaState {
  entities: { [id: number ]: Pizza};
  errors: string[];
  loading: boolean;
}
