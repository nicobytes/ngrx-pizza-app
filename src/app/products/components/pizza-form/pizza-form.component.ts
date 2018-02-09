import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';

import { Pizza } from './../../models/pizza.model';
import { Topping } from './../../models/topping.model';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnInit, OnChanges {

  exists = false;

  @Input() pizza: Pizza;
  @Input() toppings: Topping[];

  @Output() selected = new EventEmitter<Pizza>();
  @Output() create = new EventEmitter<Pizza>();
  @Output() update = new EventEmitter<Pizza>();
  @Output() remove = new EventEmitter<Pizza>();

  form = this.fb.group({
    name: ['', Validators.required],
    toppings: [[]],
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.pizza && this.pizza.id) {
      this.exists = true;
      this.form.patchValue(this.pizza);
    }
    this.form
      .get('toppings')
      .valueChanges
      .subscribe(value => this.selected.emit(value));
  }

  get nameControl() {
    return this.form.get('name') as FormControl;
  }

  get nameControlInvalid() {
    return this.nameControl.hasError('required') && this.nameControl.touched;
  }

  createPizza() {
    const { value, valid } = this.form;
    if (valid) {
      this.create.emit(value);
    }
  }

  updatePizza() {
    const { value, valid, touched } = this.form;
    if (touched && valid) {
      this.update.emit({ ...this.pizza, ...value });
    }
  }

  removePizza() {
    const { value } = this.form;
    this.remove.emit({ ...this.pizza, ...value });
  }
}
