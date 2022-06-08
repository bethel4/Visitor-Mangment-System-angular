import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ClientService } from 'src/app/components/Admin/client/state/client.service';
import { SecurityService } from '../../../state/security.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: ['./security-form.component.scss']
})
export class SecurityFormComponent implements OnInit {
  form: FormGroup;
  data:any
  isFormSubmitted = false
   constructor(
     private fb: FormBuilder,
     private serviceClint: ClientService,
     private service:SecurityService,
     public toster: ToastrService,
    
   ) {
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

     this.form = this.fb.group({
       id: null,
       name: [, [Validators.required, Validators.pattern(PAT_NAME)]],
       contact_number: [
         ,
         [
           Validators.required,
           Validators.pattern(
             /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
           ),
         ],
       ],
       created:  moment().format('YYYY-MM-DD HH:mm:ss'),
       address: [, [Validators.required]],
       status: "1",
       email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
       password: [, [Validators.required, Validators.minLength(6)]],
       client_id: [, Validators.required],
     });
     // this.clients = this.config.formData.clients[1];
   }
 
   ngOnInit(): void {
     let datas=[]
     this.serviceClint.get().subscribe((data) => {
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
     this.isFormSubmitted = true
     this.service.add(this.form.value).subscribe((res:any)=>{
       if (res.status == 1) {
         this.toster.error(res.message);
       } else {
         this.toster.error(res.message);
       }
     });
    
   }

   onCancel() {
     this.form.reset();
   }
 }
 