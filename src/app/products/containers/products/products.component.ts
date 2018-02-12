import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
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
  totalPizzas$: Observable<number>;

  constructor(
    private store: Store<fromStore.ProductsState>
  ) {
    this.pizzas$ = this.store.pipe(select(fromPizzas.getAllPizzas));
    this.totalPizzas$ = this.store.pipe(select(fromPizzas.getTotalPizzas));
  }

  ngOnInit() {
  }

}
