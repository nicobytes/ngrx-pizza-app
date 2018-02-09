import { Action } from '@ngrx/store';

import { Pizza } from './../../../models/pizza.model';

// load pizzas
export const LOAD_PIZZAS = '[Products] LOAD_PIZZAS';
export const LOAD_PIZZAS_FAIL = '[Products] LOAD_PIZZAS_FAIL';
export const LOAD_PIZZAS_SUCCESS = '[Products] LOAD_PIZZAS_SUCCESS';

export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: { errors: string[]}) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: { pizzas: Pizza[]}) {}
}

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizza';
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail';
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success';

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA;
  constructor(public payload: {pizza: Pizza}) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL;
  constructor(public payload: { errors: string[]}) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS;
  constructor(public payload: {pizza: Pizza}) {}
}

// update pizza
export const UPDATE_PIZZA = '[Products] Update Pizza';
export const UPDATE_PIZZA_FAIL = '[Products] Update Pizza Fail';
export const UPDATE_PIZZA_SUCCESS = '[Products] Update Pizza Success';


export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA;
  constructor(public payload: {pizza: Pizza}) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL;
  constructor(public payload: { errors: string[]}) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS;
  constructor(public payload: {pizza: Pizza}) {}
}

// remove pizza
export const REMOVE_PIZZA = '[Products] Remove Pizza';
export const REMOVE_PIZZA_FAIL = '[Products] Remove Pizza Fail';
export const REMOVE_PIZZA_SUCCESS = '[Products] Remove Pizza Success';

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA;
  constructor(public payload: {pizza: Pizza}) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL;
  constructor(public payload: { errors: string[]}) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS;
  constructor(public payload: {pizza: Pizza}) {}
}

// action types
export type PizzasActions =
LoadPizzas
| LoadPizzasFail
| LoadPizzasSuccess
| CreatePizza
| CreatePizzaFail
| CreatePizzaSuccess
| UpdatePizza
| UpdatePizzaFail
| UpdatePizzaSuccess
| RemovePizza
| RemovePizzaFail
| RemovePizzaSuccess;
