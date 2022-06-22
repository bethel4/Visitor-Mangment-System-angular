import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { ClientService } from 'src/app/components/Admin/client/state/client.service';
import { SecurityService } from '../../../state/security.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-security-form',
  templateUrl: './security-form.component.html',
  styleUrls: ['./security-form.component.scss']
})
export class SecurityFormComponent implements OnInit {
  form: FormGroup;
  data:any
 user='security'
 title='Add Security'
   constructor(
     private fb: FormBuilder,
     private service:SecurityService,
     public toster: ToastrService,
     public router: Router
    
   ) {
    
   }
 
   ngOnInit(): void {
    
    
   }
   onSubmit(formValue) {
    
     this.service.add(formValue).subscribe((res:any)=>{
       if (res.status == 1) {
         this.toster.success(res.message);
         setInterval(()=>{this.router.navigate(['admin/security'])},3000)
       } else {
         this.toster.error(res.message);
       }
     });
     
   }

   onCancel() {
     this.form.reset();
   }
 }
 