import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionQuery } from '../../state/session.query';
import { SessionService } from '../../state/session.service';
declare var require;
const Swal = require('sweetalert2');
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  form: FormGroup;
  interval: number;
  constructor(
    private fb: FormBuilder,
    public toster: ToastrService,
    private service: SessionService,
    private router: Router,
    private query: SessionQuery
  ) {
    
  }

  ngOnInit() {
    console.log(this.query.isLoggedIn())
    this.interval = setInterval(() => {    if(this.query.isLoggedIn()){
    if(this.query.isRole()=='SuperAdmin'){
      this.router.navigate(['/SuperAdmin'])
    }else if(this.query.isRole()=='Client'){
      this.router.navigate(['/client'])
    }else if(this.query.isRole()=='Customer'){
      this.router.navigate(['/customer'])
    }else if (this.query.isRole() == 'Security'){
      this.router.navigate(['/security'])
    }
    } }, 1000);
 
    this.loginForm = this.fb.group({
      contact_number: ['', [Validators.required, Validators.minLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  showPassword() {
    this.show = !this.show;
  }
  onSubmit() {
    const {} = {};
    const { contact_number, password } = this.loginForm.value;
    this.service.login(contact_number, password).subscribe((res: any) => {
      if (res.status) {
        this.toster.success(res.message);
        if (
          this.query.isRole() == 'Super Admin'
        ) {
          this.router.navigate(['/SuperAdmin']);
        } else if (this.query.isRole() == 'Security') {
          this.router.navigate(['/security']);
        } else if (this.query.isRole() == 'Customer') {
          this.router.navigate(['/customer']);
        } else if (this.query.isRole() == 'Client') {
          this.router.navigate(['/client']);
        }
      } else {
         this.toster.error(res.message);
        this.service.logout();
      }
    });
  }
}
