import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppointmentComponent } from './my-appointment.component';

describe('MyAppointmentComponent', () => {
  let component: MyAppointmentComponent;
  let fixture: ComponentFixture<MyAppointmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAppointmentComponent]
    });
    fixture = TestBed.createComponent(MyAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
