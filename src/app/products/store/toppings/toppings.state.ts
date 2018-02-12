import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Topping } from './../../models/topping.model';

export interface ToppingsState extends EntityState<Topping> {
  errors: string[];
  loading: boolean;
  selectedToppings: number[];
}

export const toppingsAdapter: EntityAdapter<Topping> = createEntityAdapter<Topping>({
  sortComparer: false
});
