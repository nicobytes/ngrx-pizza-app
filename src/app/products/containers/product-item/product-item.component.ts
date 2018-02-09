import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Pizza, Topping } from '../../models';
import * as fromStore from './../../store';
import * as fromPizzas from './../../store/pizzas';
import * as fromToppings from './../../store/toppings';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  pizza$: Observable<Pizza>;
  visualise$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {
    this.pizza$ = this.store.select(fromPizzas.getSelectedPizza);
    this.toppings$ = this.store.select(fromToppings.getToppingsCollection);
  }

  ngOnInit() {
    const action = new fromToppings.LoadToppings();
    this.store.dispatch(action);
    // const pizzaId = this.route.snapshot.params.pizzaId;
    // if (pizzaId === undefined) {
    //   this.pizza = {};
    //   this.loadToppings();
    // }else {
    //   this.pizzasService.getPizza(parseInt(pizzaId, 10))
    //   .subscribe(pizza => {
    //     this.pizza = pizza;
    //     this.loadToppings();
    //   });
    // }
  }

  onSelect(toppings: Topping[]) {
    const ids = toppings.map(topping => topping.id);
    const action = new fromToppings.VisualiseToppings({ids});
    this.store.dispatch(action);
    // this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza) {
    // this.pizzasService.createPizza(event)
    // .subscribe(pizza => {
    //   this.router.navigate([`/products/`]);
    // });
  }

  onUpdate(event: Pizza) {
    // this.pizzasService.updatePizza(event).subscribe(() => {
    //   this.router.navigate([`/products`]);
    // });
  }

  onRemove(event: Pizza) {
    // this.pizzasService.removePizza(event).subscribe(() => {
    //   this.router.navigate([`/products`]);
    // });
  }

  loadToppings() {
    // this.toppingsService.getToppings()
    // .subscribe(toppings => {
    //   this.toppings = toppings;
    // });
  }

}
