import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelClaimsComponent } from './travel-claims.component';

describe('TravelClaimsComponent', () => {
  let component: TravelClaimsComponent;
  let fixture: ComponentFixture<TravelClaimsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelClaimsComponent]
    });
    fixture = TestBed.createComponent(TravelClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
