import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  constructor(
    private router:Router,
    private toastr:ToastrService,
  ){}

changepassForms=new FormGroup({
  currentpassword:new FormControl("",),
newpassword:new FormControl("",),
confirmpassword:new FormControl("",)

})

Passwordsubmit(){

this.toastr.success('Submit successfully')
this.router.navigateByUrl('/customer-layout/home') 

 } 
 
//  else if(this.loginForms.value.email=='admin@gmail.com' &&
//   this.loginForms.value.password=='123'){
//     this.toastr.success('login successfully')
//     this.router.navigateByUrl('/admin-layout/dashboard') 
//   }
 

}


