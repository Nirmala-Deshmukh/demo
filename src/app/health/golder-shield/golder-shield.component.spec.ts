import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolderShieldComponent } from './golder-shield.component';

describe('GolderShieldComponent', () => {
  let component: GolderShieldComponent;
  let fixture: ComponentFixture<GolderShieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GolderShieldComponent]
    });
    fixture = TestBed.createComponent(GolderShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
