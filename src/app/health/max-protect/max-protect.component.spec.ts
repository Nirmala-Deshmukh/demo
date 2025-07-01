import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxProtectComponent } from './max-protect.component';

describe('MaxProtectComponent', () => {
  let component: MaxProtectComponent;
  let fixture: ComponentFixture<MaxProtectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxProtectComponent]
    });
    fixture = TestBed.createComponent(MaxProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
