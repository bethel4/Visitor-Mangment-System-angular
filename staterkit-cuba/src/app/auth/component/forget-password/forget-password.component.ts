import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionService } from '../../state/session.service';
declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  form: FormGroup;
  public show: boolean = false;
  isFormSubmitted = false
  constructor(private service:SessionService, private fb: FormBuilder,) { }

  ngOnInit() {
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
    this.form = this.fb.group({
      email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
    });
  }
  basicAlert() {
    Swal.fire('Any fool can use a computer')
  }
  forgetPassword(){
    this.isFormSubmitted=true
let value={
  status:"1",
  email:this.form.value.email
}   

    this.service.forgetPassword(value).subscribe((res:any) => {
     
    
      if(res.status){
        Swal.fire(res.message)
      }else{
        Swal.fire(res.message)
      }
    })
  }

  showPassword() {
    this.show = !this.show;
  }

}
