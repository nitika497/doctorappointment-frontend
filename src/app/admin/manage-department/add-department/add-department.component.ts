import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  constructor(
    private router: Router,
    private toastr: ToastrService

  ) { }
  departmentForms = new FormGroup({
    name: new FormControl(""),
    description: new FormControl("")
  })
  submit() {
    this.toastr.success('submit successfully')
    this.router.navigateByUrl('/admin-layout/managedepartment')
  }
}
