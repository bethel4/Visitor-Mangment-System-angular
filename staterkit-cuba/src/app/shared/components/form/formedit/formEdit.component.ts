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
<<<<<<< HEAD
  data: any[]
=======
  displayMessage: { [key: string]: string } = {};
  data: any[]
  checkbox=true
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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
<<<<<<< HEAD
               if(this.user=='client')
{
  this.form = this.fb.group({
    id: this.selectedID,
    name: [, [Validators.required,  Validators.pattern(PAT_NAME)]],
    address: [, [Validators.required]],
    status: '1',
    email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
    //client_id:[, [Validators.required]]
  });  
} 
else{
  this.form = this.fb.group({
    id: this.selectedID,
    name: [, [Validators.required,  Validators.pattern(PAT_NAME)]],
    address: [, [Validators.required]],
    status: '1',
    email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
    client_id:[, [Validators.required]]
  });
}           
=======
                this.form = this.fb.group({
                  id: this.selectedID,
                  name: [, [Validators.required,  Validators.pattern(PAT_NAME)]],
                  address: [, [Validators.required]],
                  status: '1',
                  email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
                });
            
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
  }

  ngOnInit(): void {
    let datas=[]
<<<<<<< HEAD
 
    if(this.user=='customer'||this.user=='security'){
=======
  
    if(this.user=='customer'){
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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
<<<<<<< HEAD
      this.hide=false;
=======
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
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
<<<<<<< HEAD
          this.row=datas.filter(data => data.id==this.selectedID)
=======
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
           this.data = datas;
        }
      });
    }

  

  }

  onSubmit() {
<<<<<<< HEAD
    
   if(this.user=='client'){
     let value={
       id:this.selectedID,
       name:this.form.value.name,
       email:this.form.value.email,
       status:this.form.value.status,
      address:this.form.value.address
     }
     this.formSubmit.emit(value);
   }else{
    this.formSubmit.emit(this.form.value);
   }
  
=======
   
    this.formSubmit.emit(this.form.value);
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
 
   
  }

  onCancel() {
    this.formClose.emit();
  }
}
