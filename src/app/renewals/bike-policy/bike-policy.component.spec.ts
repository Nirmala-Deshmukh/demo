import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikePolicyComponent } from './bike-policy.component';

describe('BikePolicyComponent', () => {
  let component: BikePolicyComponent;
  let fixture: ComponentFixture<BikePolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BikePolicyComponent]
    });
    fixture = TestBed.createComponent(BikePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
