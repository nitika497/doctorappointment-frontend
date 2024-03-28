import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
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
    


     submit(){
    
     this.toastr.success('submit successfully')
     this.router.navigateByUrl('/admin-layout/managedoctor')
     }
}
