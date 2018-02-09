import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { ProductsState } from './products.state';

export const getProductsState = createFeatureSelector<ProductsState>('products');
