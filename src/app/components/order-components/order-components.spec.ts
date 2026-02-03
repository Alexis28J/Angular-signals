import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponents } from './order-components';

describe('OrderComponents', () => {
  let component: OrderComponents;
  let fixture: ComponentFixture<OrderComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
