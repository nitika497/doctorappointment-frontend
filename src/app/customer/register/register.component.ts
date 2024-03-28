import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { UserService } from 'src/app/shared/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private router: Router,
    private toastr:ToastrService,
    private userservice: UserService,
    private spinner: NgxSpinnerService
  ) { }

  loginForms=new FormGroup({
    name:new FormControl(""),
    age:new FormControl(""),
    email:new FormControl(""),
  password:new FormControl(""),
    contact:new FormControl(""),
    address:new FormControl(""),
   gender:new FormControl(""),
  })



  register() {
    console.log(this.loginForms.value);
    this.spinner.show()
    this.userservice.registerPatient(this.loginForms.value).subscribe({
      next: (result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.toastr.success(result.message)
    this.router.navigateByUrl("/customer-layout/home")
        }
        else {
          this.toastr.error(result.message)
        }
      },
      error: (err: any) => {
        console.log("Error occured", err);
        this.spinner.hide()
      },
      complete: () => {
        this.spinner.hide()
      }
    })
  }
}
