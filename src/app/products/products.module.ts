import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsRoutingModule } from './products-routing.module';
import { PizzaDisplayComponent } from './components/pizza-display/pizza-display.component';
import { PizzaFormComponent } from './components/pizza-form/pizza-form.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { PizzaToppingsComponent } from './components/pizza-toppings/pizza-toppings.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProductItemComponent } from './containers/product-item/product-item.component';

import { PizzasService } from './services/pizzas.service';
import { ToppingsService } from './services/topping.service';
import * as fromStore from './store';
import * as fromPizzas from './store/pizzas';
import * as fromToppings from './store/toppings';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', fromStore.reducers),
    EffectsModule.forFeature([
      fromPizzas.PizzasEffects,
      fromToppings.ToppingsEffects
    ])
  ],
  declarations: [
    PizzaDisplayComponent,
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent,
    ProductsComponent,
    ProductItemComponent
  ],
  exports: [],
  providers: [
    PizzasService,
    ToppingsService
  ],
})
export class ProductsModule { }
