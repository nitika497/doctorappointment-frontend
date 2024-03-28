import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
  constructor(
    private router:Router,
    private toastr:ToastrService
   
  ){}

     doctorForm=new FormGroup({
     Name:new FormControl(""),
     education:new FormControl(""),  
     specialist:new FormControl(""),
     description:new FormControl(""),
     experience:new FormControl(""),
     departmentId:new FormControl(""),
     image:new FormControl(""),
     })
    


     update(){
    
     this.toastr.success('update successfully')
     this.router.navigateByUrl('/admin-layout/managedoctor')
     }
}
