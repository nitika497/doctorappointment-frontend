import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent {
  constructor(
    private router:Router,
    private toastr:ToastrService
  
  ){}
   departmentForms=new FormGroup({
    name:new FormControl(""),
    Description:new FormControl("")
   })
   submit(){
this.toastr.success('update successfully')
this.router.navigateByUrl('/admin-layout/managedepartment')
   }
}
