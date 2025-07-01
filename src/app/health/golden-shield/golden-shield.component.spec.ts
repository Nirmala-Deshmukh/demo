import { ComponentFixture, TestBed } from '@angular/core/testing';

import { goldenShieldComponent } from './golden-shield.component';

describe('goldenShieldComponent', () => {
  let component: goldenShieldComponent;
  let fixture: ComponentFixture<goldenShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [goldenShieldComponent]
    });
    fixture = TestBed.createComponent(goldenShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
