import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent{
  constructor(
    private router:Router,
    private authservice:AuthService
  ){}



    openappoint(){
      if(this.authservice.getToken()!=null){
          this.router.navigateByUrl('/customer-layout/bookappointment')
      }

      else{
        this.router.navigateByUrl('/login')
      }
    }
}
