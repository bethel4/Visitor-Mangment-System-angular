import { formatDate } from '@angular/common';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VistiorService } from '../../../Admin/visitor/state/vistior.service';
import * as moment from 'moment';
import { CustomerService } from '../../../Admin/customer/state/customer.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.component.html',
  styleUrls: ['./visitorform.component.scss'],
  // providers: [{ provide: VisitorService, useValue: VisitorService }]
})
export class VisitorFormComponent implements OnInit {
  form: FormGroup;
  clients: any;
  customers: any;
  data: any[];
  isFormSubmitted = false

  constructor(
    private fb: FormBuilder,
    private service: VistiorService,
    private serviceCustomer:CustomerService,
    public toster: ToastrService,
    public router: Router
  ) {
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.form = this.fb.group({
    
      name: [, [Validators.required, Validators.pattern(PAT_NAME)]],
      contact_number: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
          ),
        ],
      ],
      address: [, [Validators.required]],
      status: '1',
      reason: [, [Validators.required]],
      visitor_role: [, Validators.required],
      customer_id: [, Validators.required],
    });
   
   
  }

  ngOnInit(): void {
    let datas=[]
    this.serviceCustomer.get().subscribe((data) => {
    console.log(data.data.length)
    if(data.status ===1){
      for (let i = 0; i < data.data.length; i++) {
     datas.push({
          id: data.data[i].id,
          name: data.data[i].name,
        });
      }
    this.data=datas

    }
   
    });
  }

  onSubmit() {
    console.log(this.form.value)
   this.isFormSubmitted = true
    this.service.add(this.form.value).subscribe((res: any)=>{
      if (res.status) {
        this.toster.success(res.message);
        setInterval(()=>{this.router.navigate(['security'])},3000)
      } else {
        this.toster.error(res.message);
      }
    })
   
    
  }

  onCancel() {
    this.form.reset();
  }

}
