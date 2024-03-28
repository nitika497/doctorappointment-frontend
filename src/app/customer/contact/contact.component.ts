import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(
    private router: Router,
    private tostr: ToastrService,
    private authservice: AuthService

  ) { }

  contactForms = new FormGroup({
    name: new FormControl("",[Validators.required]),
    email: new FormControl("",[Validators.required,Validators.email]),
    phone: new FormControl("", [Validators.required]),
    subject: new FormControl("", [Validators.required]),
    message: new FormControl("", [Validators.required])

  })

  contactsubmit() {
    this.tostr.success("Message Sent")
    // this.router.navigateByUrl('/login')
    this.contactForms.reset()

  }
}
