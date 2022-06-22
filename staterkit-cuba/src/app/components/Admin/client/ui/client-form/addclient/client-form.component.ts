import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ClientService } from '../../../../client/state/client.service';
import { ClientQuery } from '../../../state/client.query';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  clients$: Observable<any> = this.service.get();
  form: FormGroup;
  row:any 
  title='Add Client';
  clients: any[];
  user='client'
  data: any[];
 
  constructor(
    private fb: FormBuilder,
    private service: ClientService,
    public toster: ToastrService,
    private query: ClientQuery,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

  ngOnInit(): void {
    const selectedID = this.route.snapshot.paramMap.get('id');
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
          telephone: data.data[i].contact_number,
          status: status,
          address: data.data[i].address,
          created: data.data[i].created,
          email: data.data[i].email
        });
      }
      this.row=datas.filter(data => data.roll==selectedID)
      this.data = datas;
      console.log(this.data)
    });
   

  }

  onGet(){
    
  }
  onSubmit(data) {
 console.log(data)
    this.service.add(data).subscribe((res: any) => {
      if (res.status == 1) {
        this.toster.success(res.message);
      } else {
        this.toster.error(res.message);
      }
    });
  //  setInterval(()=>{this.router.navigate(['client'])},3000)
  }
  onCancel() {
    this.form.reset();
  }
  onEdit() {
    const selectedID = this.route.snapshot.paramMap.get('id');
    console.log(selectedID);
  }
}
