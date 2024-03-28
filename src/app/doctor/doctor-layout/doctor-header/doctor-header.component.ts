import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-doctor-header',
  templateUrl: './doctor-header.component.html',
  styleUrls: ['./doctor-header.component.css']
})
export class DoctorHeaderComponent {
  isLogin: boolean = false
  
  constructor(private router:Router,
    private authservice:AuthService){

  }
  ngOnInit(): void {
    this.checkLogin()
  }

  checkLogin(){
    if(this.authservice.getToken()!=null){
      this.isLogin = true
    }
    else{
      this.isLogin = false
    }
  }

  logout(){
    this.authservice.ClearData()
    this.router.navigateByUrl('/login')
  }
}
