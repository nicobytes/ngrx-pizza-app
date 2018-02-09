import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Pizza } from './../../models/pizza.model';
import * as fromPizzas from './../../store/pizzas';
import * as fromStore from './../../store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {
    this.pizzas$ = this.store.select(fromPizzas.getPizzasCollection);
  }

  ngOnInit() {
  }

}
