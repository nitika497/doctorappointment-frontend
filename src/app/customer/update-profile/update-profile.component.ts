import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  constructor(
  private router:Router,
  private tostr:ToastrService,
    
     ){}
      
        loginForms=new FormGroup({
         name:new FormControl(""),
         email:new FormControl(""),
       
         contact:new FormControl(""),
         gender:new FormControl(""),
         age:new FormControl(""),
         address:new FormControl(""),
        })
    
      register(){
        
            this.tostr.success("register successfully")
            this.router.navigateByUrl('/login')
    
        
      } 
}
