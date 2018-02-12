import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { Pizza } from './../../models/pizza.model';

export interface PizzasState extends EntityState<Pizza> {
  errors: string[];
  loading: boolean;
}

export const pizzasAdapter: EntityAdapter<Pizza> = createEntityAdapter<Pizza>({
  sortComparer: false
});
