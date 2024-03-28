import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientProfileComponent } from './view-patient-profile.component';

describe('ViewPatientProfileComponent', () => {
  let component: ViewPatientProfileComponent;
  let fixture: ComponentFixture<ViewPatientProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPatientProfileComponent]
    });
    fixture = TestBed.createComponent(ViewPatientProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
