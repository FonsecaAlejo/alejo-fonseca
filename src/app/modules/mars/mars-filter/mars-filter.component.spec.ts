import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsFilterComponent } from './mars-filter.component';

describe('MarsFilterComponent', () => {
  let component: MarsFilterComponent;
  let fixture: ComponentFixture<MarsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
