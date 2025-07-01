import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProtectComponent } from './personal-protect.component';

describe('PersonalProtectComponent', () => {
  let component: PersonalProtectComponent;
  let fixture: ComponentFixture<PersonalProtectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalProtectComponent]
    });
    fixture = TestBed.createComponent(PersonalProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
