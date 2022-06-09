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
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  form: FormGroup;
  hide = true;
  disable = true;
  row:any 
  title: string;
  clients: any[];
  data: any;
  isFormSubmitted = false;
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
      id: null,
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
      created: moment().format('YYYY-MM-DD HH:mm:ss'),
      address: [, [Validators.required]],
      status: '1',
      email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
      password: [, [Validators.required, Validators.minLength(6)]],
    });
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
  onSubmit() {
    this.isFormSubmitted = true;

    this.service.add(this.form.value).subscribe((res: any) => {
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
