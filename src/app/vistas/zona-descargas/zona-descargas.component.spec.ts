import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaDescargasComponent } from './zona-descargas.component';

describe('ZonaDescargasComponent', () => {
  let component: ZonaDescargasComponent;
  let fixture: ComponentFixture<ZonaDescargasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonaDescargasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaDescargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
