import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Easteregg1Component } from './easteregg1.component';

describe('Easteregg1Component', () => {
  let component: Easteregg1Component;
  let fixture: ComponentFixture<Easteregg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Easteregg1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Easteregg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
