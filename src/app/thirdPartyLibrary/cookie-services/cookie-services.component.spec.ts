import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieServicesComponent } from './cookie-services.component';

describe('CookieServicesComponent', () => {
  let component: CookieServicesComponent;
  let fixture: ComponentFixture<CookieServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CookieServicesComponent]
    });
    fixture = TestBed.createComponent(CookieServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
