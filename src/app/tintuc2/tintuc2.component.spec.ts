import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tintuc2Component } from './tintuc2.component';

describe('Tintuc2Component', () => {
  let component: Tintuc2Component;
  let fixture: ComponentFixture<Tintuc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tintuc2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tintuc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
