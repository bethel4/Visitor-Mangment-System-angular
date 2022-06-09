import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClientService } from '../../../state/client.service';
import { ClientQuery } from '../../../state/client.query';

@Component({
  selector: 'app-client-formedit',
  templateUrl: './client-formedit.component.html',
  styleUrls: ['./client-formedit.component.scss'],
})
export class ClientFormEditComponent implements OnInit {
  clients$: Observable<any> = this.service.get();
  form: FormGroup;
  data: any;
  row:any;
  isFormSubmitted = false;
   selectedID: any=this.route.snapshot.paramMap.get('id'); ;
  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    public toster: ToastrService,
    private query: ClientQuery,
    private route: ActivatedRoute, 
    private router: Router
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
    let datas = [];
    this.service.get().subscribe((data) => {
      for (let i = 0; i < data.data.length; i++) {
        let status;
        if (data.data[i].status == 1) {
          status = 'Active';
        } else {
          status = 'Inactive';
        }
        datas.push({
          roll: data.data[i].id,
          name: data.data[i].name,
          status: status,
          address: data.data[i].address,
          created: data.data[i].created,
          email: data.data[i].email
        });
      }
      this.row=datas.filter(data => data.roll==this.selectedID)
      this.data = datas;
      console.log(this.data)
    });
   

  }
  onSubmit() {
    this.isFormSubmitted = true
    console.log(this.form.value)
    this.service.update(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.toster.success(res.message);
      } else {
        this.toster.error(res.message);
      }
    });
    setInterval(()=>{this.router.navigate(['client'])},3000)
  }
  onCancel() {
    this.form.reset();
  }
  onEdit() {
    const selectedID = this.route.snapshot.paramMap.get('id');
    console.log(selectedID);
  }
}
