import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzasGuard } from './guards/pizzas.guard';
import { PizzasItemGuard } from './guards/pizza-item.guard';
import { ToppingsGuard } from './guards/toppings.guard';
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [PizzasGuard],
    component: ProductsComponent,
  },
  {
    path: 'new',
    canActivate: [PizzasGuard, ToppingsGuard],
    component: ProductItemComponent,
  },
  {
    path: ':pizzaId',
    canActivate: [PizzasItemGuard, ToppingsGuard],
    component: ProductItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
