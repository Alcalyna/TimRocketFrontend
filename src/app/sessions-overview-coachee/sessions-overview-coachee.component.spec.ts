import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsOverviewCoacheeComponent } from './sessions-overview-coachee.component';

describe('SessionsOverviewCoacheeComponent', () => {
  let component: SessionsOverviewCoacheeComponent;
  let fixture: ComponentFixture<SessionsOverviewCoacheeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionsOverviewCoacheeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsOverviewCoacheeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
