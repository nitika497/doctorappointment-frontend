import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/auth/auth.service';
import { UserService } from '../shared/user/user.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authservice: AuthService,
    private userservice: UserService,
    private spinner: NgxSpinnerService
  ) { }

   loginForms= new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })

  loginSubmit() {
    this.spinner.show()
    this.userservice.login(this.loginForms.value).subscribe({
      next: (result: any) => {
        this.spinner.hide()
        if (result.success) {
          this.toastr.success(result.message)
          this.authservice.setData(result)

          if (result.data.usertype == 1) {
            this.router.navigateByUrl("/admin-layout/dashboard")
          }
          else if (result.data.usertype == 2) {
            this.router.navigateByUrl("/doctor-layout/doctor-dashboard")
          }
          else {
            this.router.navigateByUrl("/customer-layout/home")
          }

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


    //  if(this.loginForms.value.email=='user@gmail.com' && 
    //  this.loginForms.value.password=='123'){
    // this.toastr.success('Login successfully')
    // this.router.navigateByUrl('/customer-layout/home')
    // this.authservice.setData({token:this.loginForms.value.email})  


    //  } 

    //  else if(this.loginForms.value.email=='admin@gmail.com' &&
    //   this.loginForms.value.password=='123'){
    //     this.toastr.success('login successfully')
    //     this.router.navigateByUrl('/admin-layout/dashboard')
    //     this.authservice.setData({token:this.loginForms.value.email})  
    //   }


    //   else if(this.loginForms.value.email=='doct@gmail.com' &&
    //   this.loginForms.value.password=='123'){
    //     this.toastr.success('login successfully')
    //     this.router.navigateByUrl('/doctor-layout/doctor-dashboard')
    //     this.authservice.setData({token:this.loginForms.value.email})  
    //   }




    //  else{
    //   this.toastr.error("Invalid Credentials")
    // } 
  }

}


