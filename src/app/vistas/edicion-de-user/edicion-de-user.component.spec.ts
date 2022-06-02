import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDeUserComponent } from './edicion-de-user.component';

describe('EdicionDeUserComponent', () => {
  let component: EdicionDeUserComponent;
  let fixture: ComponentFixture<EdicionDeUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDeUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
