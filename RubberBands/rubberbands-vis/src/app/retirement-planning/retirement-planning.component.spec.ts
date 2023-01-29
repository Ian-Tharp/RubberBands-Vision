import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPlanningComponent } from './retirement-planning.component';

describe('RetirementPlanningComponent', () => {
  let component: RetirementPlanningComponent;
  let fixture: ComponentFixture<RetirementPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementPlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetirementPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
