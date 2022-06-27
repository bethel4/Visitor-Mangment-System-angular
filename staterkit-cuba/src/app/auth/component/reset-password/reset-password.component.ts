import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../state/session.service';
declare var require
const Swal = require('sweetalert2')
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  public show: boolean = false;
  public form: FormGroup;
  otp: any;
  constructor( private fb: FormBuilder,private service:SessionService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.otp = params['otp'];
    });
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  restPassword(){
let value={
  otp:this.otp,
  password:this.form.value.confirmPassword
}
  
    if(this.form.value.newPassword==this.form.value.confirmPassword){
      this.service.resPassword(value).subscribe((res:any) => {
        if(res.status){
          Swal.fire(res.message)
        }
        else{
          Swal.fire(res.message)
        }
      })
    }
  }
  showPassword() {
    this.show = !this.show;
  }

}
