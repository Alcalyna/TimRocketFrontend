import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsOverviewCoachComponent } from './sessions-overview-coach.component';

describe('SessionsOverviewCoachComponent', () => {
  let component: SessionsOverviewCoachComponent;
  let fixture: ComponentFixture<SessionsOverviewCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsOverviewCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsOverviewCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
