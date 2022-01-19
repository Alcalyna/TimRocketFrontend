import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoacheeProfileComponent } from './coachee-profile.component';

describe('CoacheeProfileComponent', () => {
  let component: CoacheeProfileComponent;
  let fixture: ComponentFixture<CoacheeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoacheeProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoacheeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
