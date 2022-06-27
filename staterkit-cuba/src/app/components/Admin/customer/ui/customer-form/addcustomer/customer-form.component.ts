import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ClientService } from 'src/app/components/Admin/client/state/client.service';
import { CustomerService } from '../../../state/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  form: FormGroup;
 data:any
user='customer';
title='Add Customer';
  constructor(
    private fb: FormBuilder,
    private service:CustomerService,
    public toster: ToastrService,
    public router: Router,
   
  ) {
   
  }

  ngOnInit(): void {
    
   
  }
  onSubmit(formVlaue) {
 
    this.service.add(formVlaue).subscribe((res:any)=>{
      if (res.status == 1) {
        this.toster.success(res.message);
<<<<<<< HEAD
        this.router.navigate(['SuperAdmin/customers'])
=======
        setInterval(()=>{this.router.navigate(['admin/customer'])},3000)
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
      } else {
        this.toster.error(res.message);
      }
    });
   
  }

  onCancel() {
    this.form.reset();
  }
}
