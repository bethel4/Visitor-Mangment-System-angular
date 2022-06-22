import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SessionQuery } from '../../../../auth/state/session.query';
import { ClientService } from '../../../../components/Admin/client/state/client.service';
import { CustomerService } from '../../../../components/Admin/customer/state/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formEdit',
  templateUrl: './formEdit.component.html',
  styleUrls: ['./formEdit.component.scss']
})
export class FormComponentEdit implements OnInit {
  @Input() fields: Array<Array<any>>;
  //@Input() validationMessages: { [key: string]: { [key: string]: string } } = {};
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  @Input() user: any;
  @Input() title: any;
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  data: any[]
  checkbox=true
  isFormSubmitted = false
 role=this.query.isRole()
  PAT_NAME = "^[a-zA-Z ]{2,20}$";
  PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
  hide: boolean = true;

  selectedID: any=this.route.snapshot.paramMap.get('id');row: any[];
 ;
  constructor(private fb: FormBuilder,
              private query:SessionQuery,
              private serviceCustomer:CustomerService,
              private serviceClint: ClientService,
              private route: ActivatedRoute, 
              ) {
  const PAT_NAME = "^[a-zA-Z ]{2,20}$";
  const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";
                this.form = this.fb.group({
                  id: this.selectedID,
                  name: [, [Validators.required,  Validators.pattern(PAT_NAME)]],
                  address: [, [Validators.required]],
                  status: '1',
                  email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
                });
            
  }

  ngOnInit(): void {
    let datas=[]
  
    if(this.user=='customer'){
      this.serviceCustomer.get().subscribe((data) => {
        for (let i = 0; i < data.data.length; i++) {
          let status;
          if (data.data[i].status == 1) {
            status = 'Active';
          } else {
            status = 'Inactive';
          }
          datas.push({
            id: data.data[i].id,
            name: data.data[i].name,
            status: status,
            address: data.data[i].address,
            created: data.data[i].created,
            email: data.data[i].email,
            clientName:data.data[i].clint_name
          });
        }
        this.row=datas.filter(data => data.id==this.selectedID)
        this.data = datas;
        
      }); 
    }else if(this.user=='client'){
      this.serviceClint.get().subscribe((data) => {
        if (data.status === 1) {
          for (let i = 0; i < data.data.length; i++) {
            let status;
            if (data.data[i].status == 1) {
              status = 'Active';
            } else if (data.data[i].status == 0) {
              status = 'Inactive';
            }
            datas.push({
              id: data.data[i].id,
              name: data.data[i].name,
              contact_number: data.data[i].contact_number,
              status: status,
              address: data.data[i].address,
              created: data.data[i].created,
              email: data.data[i].email,
            });
          }
           this.data = datas;
        }
      });
    }

  

  }

  onSubmit() {
   
    this.formSubmit.emit(this.form.value);
 
   
  }

  onCancel() {
    this.formClose.emit();
  }
}
