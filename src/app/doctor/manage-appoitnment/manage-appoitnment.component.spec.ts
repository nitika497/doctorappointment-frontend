import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppoitnmentComponent } from './manage-appoitnment.component';

describe('ManageAppoitnmentComponent', () => {
  let component: ManageAppoitnmentComponent;
  let fixture: ComponentFixture<ManageAppoitnmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAppoitnmentComponent]
    });
    fixture = TestBed.createComponent(ManageAppoitnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
