import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagComponents } from './flag-components';

describe('FlagComponents', () => {
  let component: FlagComponents;
  let fixture: ComponentFixture<FlagComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlagComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlagComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
