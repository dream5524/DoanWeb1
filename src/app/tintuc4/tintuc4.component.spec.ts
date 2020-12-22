import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tintuc4Component } from './tintuc4.component';

describe('Tintuc4Component', () => {
  let component: Tintuc4Component;
  let fixture: ComponentFixture<Tintuc4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tintuc4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tintuc4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
