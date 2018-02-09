import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaItemComponent } from './pizza-item.component';

describe('PizzaItemComponent', () => {
  let component: PizzaItemComponent;
  let fixture: ComponentFixture<PizzaItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
