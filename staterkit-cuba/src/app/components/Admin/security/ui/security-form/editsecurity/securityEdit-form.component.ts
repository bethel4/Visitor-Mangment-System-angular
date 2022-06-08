import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ClientService } from '../../../../client/state/client.service';
import { SecurityService } from '../../../state/security.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-securityEdit-form',
  templateUrl: './securityEdit-form.component.html',
  styleUrls: ['./securityEdit-form.component.scss']
})
export class SecurityFormEditComponent implements OnInit {
  form: FormGroup;
  data:any
  row:any;
  isFormSubmitted = false;
  selectedID: any=this.route.snapshot.paramMap.get('id'); ;
   constructor(
     private fb: FormBuilder,
     private serviceClint: ClientService,
     private service:SecurityService,
     public toster: ToastrService,
     public route: ActivatedRoute
    
   ) {
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

     this.form = this.fb.group({
       id: this.selectedID,
       name: [, [Validators.required,  Validators.pattern(PAT_NAME)]], 
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
     console.log(this.selectedID)
     let datas=[]
     this.service.get().subscribe((data) => {
     console.log(data.data.length)
     if(data.status ===1){
       for (let i = 0; i < data.data.length; i++) {
      datas.push({
           id: data.data[i].id,
           name: data.data[i].name,
           email: data.data[i].email,
           address: data.data[i].address,
           clint_name: data.data[i].clint_name,
         });
       }
       this.row=datas.filter(data => data.id==this.selectedID)
       console.log(data)
       this.data = datas;
     }
     });
    
   }
   onSubmit() {
     this.isFormSubmitted= true
    console.log(this.form.value)
    this.service.update(this.form.value).subscribe((res: any) => {
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
  onEdit() {
    const selectedID = this.route.snapshot.paramMap.get('id');
    console.log(selectedID);
  }

}
