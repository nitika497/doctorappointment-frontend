import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { CustomerHeaderComponent } from './customer/customer-layout/customer-header/customer-header.component';
import { CustomerFooterComponent } from './customer/customer-layout/customer-footer/customer-footer.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { ContactComponent } from './customer/contact/contact.component';
// import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { AdminHeaderComponent } from './admin/admin-layout/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-layout/admin-footer/admin-footer.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagePatientComponent } from './admin/manage-patient/manage-patient.component';
import { ManageDoctorComponent } from './admin/manage-doctor/manage-doctor.component';
import { ManageContactComponent } from './admin/manage-contact/manage-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { UpdateProfileComponent } from './customer/update-profile/update-profile.component';


import { AddDoctorComponent } from './admin/manage-doctor/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './admin/manage-doctor/update-doctor/update-doctor.component';

import { AddDepartmentComponent } from './admin/manage-department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './admin/manage-department/update-department/update-department.component';


import { ViewDepartmentComponent } from './customer/view-department/view-department.component';
import { ViewDoctorsComponent } from './customer/view-doctors/view-doctors.component';
import { BookAppointmentComponent } from './customer/book-appointment/book-appointment.component';
import { ViewPatientProfileComponent } from './customer/view-patient-profile/view-patient-profile.component';
import { MyAppointmentComponent } from './customer/my-appointment/my-appointment.component';
import { DoctorLayoutComponent } from './doctor/doctor-layout/doctor-layout.component';
import { DoctorHeaderComponent } from './doctor/doctor-layout/doctor-header/doctor-header.component';
import { DoctorFooterComponent } from './doctor/doctor-layout/doctor-footer/doctor-footer.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { ViewDoctorProfileComponent } from './doctor/view-doctor-profile/view-doctor-profile.component';
import { ManageAppoitnmentComponent } from './doctor/manage-appoitnment/manage-appoitnment.component';
import { ManageDepartmentComponent } from './admin/manage-department/manage-department.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import{ HttpClientModule }from '@angular/common/http';
import { RegisterComponent } from './customer/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerLayoutComponent,
    CustomerHeaderComponent,
    CustomerFooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    LoginComponent,
    AdminLayoutComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    DashboardComponent,
    ManagePatientComponent,
    ManageDoctorComponent,
    ManageContactComponent,
    UpdateProfileComponent,
    ManageDepartmentComponent,
    ViewDoctorsComponent,
    BookAppointmentComponent,
    ViewPatientProfileComponent,
    MyAppointmentComponent,
    AddDoctorComponent,
    UpdateDoctorComponent,
    AddDepartmentComponent,
    UpdateDepartmentComponent,
    ViewDoctorsComponent,
    DoctorLayoutComponent,
    DoctorHeaderComponent,
    DoctorFooterComponent,
    DoctorDashboardComponent,
    ViewDoctorProfileComponent,
    ManageAppoitnmentComponent,
    ChangePasswordComponent,
    ViewDepartmentComponent,

  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
