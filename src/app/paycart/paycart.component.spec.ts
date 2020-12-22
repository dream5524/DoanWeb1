import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaycartComponent } from './paycart.component';

describe('PaycartComponent', () => {
  let component: PaycartComponent;
  let fixture: ComponentFixture<PaycartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaycartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
