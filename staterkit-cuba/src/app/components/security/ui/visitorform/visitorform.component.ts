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
  constructor(
    private fb: FormBuilder,
    private service: VistiorService,
    private serviceCustomer:CustomerService,
    public toster: ToastrService,
    public router: Router
  ) {
    this.form = this.fb.group({
      id: null,
      name:[,  [Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
      address: [, [Validators.required]],
      reason: [, [Validators.required, Validators.email]],
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
    
    this.service.add(this.form.value).subscribe((res: any)=>{
      if (res.status) {
        this.toster.success(res.message);
      } else {
        this.toster.error(res.message);
      }
    })
    setInterval(()=>{this.router.navigate(['security'])},3000)
    
  }

  onCancel() {
    this.form.reset();
  }

}
