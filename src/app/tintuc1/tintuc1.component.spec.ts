import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tintuc1Component } from './tintuc1.component';

describe('Tintuc1Component', () => {
  let component: Tintuc1Component;
  let fixture: ComponentFixture<Tintuc1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tintuc1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tintuc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
