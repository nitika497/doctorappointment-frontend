import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer/customer-layout/customer-layout.component';
import { HomeComponent } from './customer/home/home.component';
import { AboutComponent } from './customer/about/about.component';
import { ContactComponent } from './customer/contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './customer/register/register.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagePatientComponent } from './admin/manage-patient/manage-patient.component';
import { ManageDoctorComponent } from './admin/manage-doctor/manage-doctor.component';
import { ManageContactComponent } from './admin/manage-contact/manage-contact.component';
import { UpdateProfileComponent } from './customer/update-profile/update-profile.component';
import { ManageDepartmentComponent } from './admin/manage-department/manage-department.component';
import { AddDepartmentComponent } from './admin/manage-department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './admin/manage-department/update-department/update-department.component';
import { ViewAppointmentsComponent } from './admin/view-appointments/view-appointments.component';
import { authGuard } from './admin/guard/auth.guard';
import { AddDoctorComponent } from './admin/manage-doctor/add-doctor/add-doctor.component';
import { UpdateDoctorComponent } from './admin/manage-doctor/update-doctor/update-doctor.component';
import { DoctorLayoutComponent } from './doctor/doctor-layout/doctor-layout.component';
import { DoctorDashboardComponent } from './doctor/doctor-dashboard/doctor-dashboard.component';
import { ViewDoctorProfileComponent } from './doctor/view-doctor-profile/view-doctor-profile.component';
import { ManageAppoitnmentComponent } from './doctor/manage-appoitnment/manage-appoitnment.component';
import { ViewDepartmentComponent } from './customer/view-department/view-department.component';
import { ViewDoctorsComponent } from './customer/view-doctors/view-doctors.component';
import { BookAppointmentComponent } from './customer/book-appointment/book-appointment.component';
import { ViewPatientProfileComponent } from './customer/view-patient-profile/view-patient-profile.component';
import { MyAppointmentComponent } from './customer/my-appointment/my-appointment.component';
import { authDoctorGuard } from './doctor/gaurd/auth-doctor.guard';
import { authCustomerGuard } from './customer/gaurd/auth-customer.guard';
import { ChangePasswordComponent } from './change-password/change-password.component';


const routes: Routes = [
  { path:'',redirectTo:'/customer-layout/home',pathMatch:'full'},
  {path:'customer-layout',component:CustomerLayoutComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'register',component:RegisterComponent},
    {path:'update-profile',component:UpdateProfileComponent, canActivate:[authCustomerGuard]},
    {path:'viewdepartment',component:ViewDepartmentComponent},
    {path:'viewdoctor',component:ViewDoctorsComponent},
    {path:'bookappointment',component:BookAppointmentComponent,canActivate:[authCustomerGuard]},
    {path:'viewpatientprofile',component:ViewPatientProfileComponent,canActivate:[authCustomerGuard]},
    {path:'myappointment',component:MyAppointmentComponent,canActivate:[authCustomerGuard]},
    {path:'changepassword',component:ChangePasswordComponent}



 ]},
  {path:'admin-layout',component:AdminLayoutComponent, children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'managepatient',component:ManagePatientComponent},
    {path:'managedoctor',component:ManageDoctorComponent},
    {path:'managecontact',component:ManageContactComponent},
    {path:'managedepartment',component:ManageDepartmentComponent},
    {path:'adddepartment',component:AddDepartmentComponent},
    {path:'updatedepartment',component:UpdateDepartmentComponent},
    {path:'viewappoitnments',component:ViewAppointmentsComponent},
    {path:'adddoctor',component:AddDoctorComponent},
    {path:'updatedoctor',component:UpdateDoctorComponent},
    {path:'changepassword',component:ChangePasswordComponent}

 
 ]},

 {path:'doctor-layout',component:DoctorLayoutComponent, children:[
  {path:'doctor-dashboard',component:DoctorDashboardComponent},
  {path:'viewdoctorprofile',component:ViewDoctorProfileComponent},
  {path:'manageappointments',component:ManageAppoitnmentComponent},
  {path:'changepassword',component:ChangePasswordComponent},
 

]},

 {path:'login',component:LoginComponent},
 {path:'changepassword',component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
