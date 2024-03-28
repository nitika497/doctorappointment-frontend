import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    // private authservice: AuthService,
  ) { }

  appointForms = new FormGroup({
    userId: new FormControl(""),
    departmentId: new FormControl(""),
    doctorId: new FormControl(""),
    time: new FormControl(""),
    date: new FormControl(""),
    description: new FormControl(""),
    name:new FormControl(),
    contact:new FormControl()
  })

  appointsubmit() {
    this.toastr.success('Submit successfully')
    this.router.navigateByUrl('/customer-layout/myappointment')
  }

}


