import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDisplayComponent } from './pizza-display.component';

describe('PizzaDisplayComponent', () => {
  let component: PizzaDisplayComponent;
  let fixture: ComponentFixture<PizzaDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
