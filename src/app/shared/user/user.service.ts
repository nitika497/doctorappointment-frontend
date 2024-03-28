import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url_admin, base_url_patient } from 'src/app/endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  login(data:any){
    return this.http.post(base_url_admin+"login",data)
  }

  registerPatient(data:any){
    return this.http.post(base_url_patient+"register",data)
  }
}
