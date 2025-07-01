import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTripComponent } from './student-trip.component';

describe('StudentTripComponent', () => {
  let component: StudentTripComponent;
  let fixture: ComponentFixture<StudentTripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentTripComponent]
    });
    fixture = TestBed.createComponent(StudentTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
