import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoresUsersComponent } from './scores-users.component';

describe('ScoresUsersComponent', () => {
  let component: ScoresUsersComponent;
  let fixture: ComponentFixture<ScoresUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoresUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoresUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
