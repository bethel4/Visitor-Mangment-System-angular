import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { UserProfileService } from '../../state/user-profile/user-profile.service';
declare var require;
const Swal = require('sweetalert2');

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  public form: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private service: UserProfileService,
    private toaster: ToastrService,
    private router: Router,
    private query: SessionQuery
  ) {
    this.form = this.fb.group({
      id: null,
      name: [, [Validators.required]],
      address: [, [Validators.required]],
      email: [, [Validators.required]],
      contact_number: [, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
  onSubmit(): void {
    this.service.update(this.form.value).subscribe((res: any) => {
      if (res.status) {
        this.toaster.success(res.message);
        if (this.query.isRole() == 'SuperAdmin') {
          this.router.navigate(['SuperAdmin/user']);
        }else if (this.query.isRole() =='Customer'){
          this.router.navigate(['customer/user']);
        }else if (this.query.isRole() =='Security'){
          this.router.navigate(['security/user']);
        }
      }else{
        this.toaster.error(res.message);
      }

    });
  }
  stepsAlert() {
    Swal.mixin({
      input: 'password',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3'],
    })
      .queue([
        {
          title: 'Enter Old Password',
        },
        'Enter New Password',
        'Confirm Password',
      ])
      .then((result) => {
        if (result.value) {
          let value = {
            old_password: result.value[0],
            new_password: result.value[2],
          };
          this.service.updatePassword(value).subscribe((res: any) => {
            if (res.status) {
              Swal.fire({
                title: res.message,

                confirmButtonText: 'Close',
              });
            } else {
              Swal.fire({
                title: res.message,

                confirmButtonText: 'Close',
              });
            }
          });
        }
      });
  }
}
