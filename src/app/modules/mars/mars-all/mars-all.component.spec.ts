import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsAllComponent } from './mars-all.component';

describe('MarsAllComponent', () => {
  let component: MarsAllComponent;
  let fixture: ComponentFixture<MarsAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
