import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tintuc3Component } from './tintuc3.component';

describe('Tintuc3Component', () => {
  let component: Tintuc3Component;
  let fixture: ComponentFixture<Tintuc3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tintuc3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tintuc3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
