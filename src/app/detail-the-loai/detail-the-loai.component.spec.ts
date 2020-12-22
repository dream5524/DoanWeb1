import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTheLoaiComponent } from './detail-the-loai.component';

describe('DetailTheLoaiComponent', () => {
  let component: DetailTheLoaiComponent;
  let fixture: ComponentFixture<DetailTheLoaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTheLoaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTheLoaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
