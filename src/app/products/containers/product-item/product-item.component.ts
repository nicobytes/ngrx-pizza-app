import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { tap, take } from 'rxjs/operators';

import { Pizza, Topping } from '../../models';
import * as fromStore from './../../store';
import * as fromPizzas from './../../store/pizzas';
import * as fromToppings from './../../store/toppings';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductItemComponent implements OnInit, OnDestroy {

  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {
    this.pizza$ = this.store.select(fromPizzas.getSelectedPizza);
    this.toppings$ = this.store.select(fromToppings.getToppingsCollection);
    this.visualise$ = this.store.select(fromToppings.getPizzaVisualised);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    const action = new fromToppings.VisualiseToppings({ids: []});
    this.store.dispatch(action);
  }

  onSelect(toppings: Topping[]) {
    const ids = toppings.map(topping => topping.id);
    const action = new fromToppings.VisualiseToppings({ids});
    this.store.dispatch(action);
  }

  onCreate(pizza: Pizza) {
    const action = new fromPizzas.CreatePizza({pizza});
    this.store.dispatch(action);
  }

  onUpdate(pizza: Pizza) {
    const action = new fromPizzas.UpdatePizza({pizza});
    this.store.dispatch(action);
  }

  onRemove(pizza: Pizza) {
    const action = new fromPizzas.RemovePizza({pizza});
    this.store.dispatch(action);
  }

}
