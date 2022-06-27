import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { ClientService } from 'src/app/components/Admin/client/state/client.service';
import { CustomerService } from 'src/app/components/Admin/customer/state/customer.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() fields: Array<Array<any>>;
  //@Input() validationMessages: { [key: string]: { [key: string]: string } } = {};
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  @Input() user: any;
  @Input() title: any;
  form: FormGroup;
  displayMessage: { [key: string]: string } = {};
  data: any[];
  checkbox = true;
  isFormSubmitted = false;
  role = this.query.isRole();
  PAT_NAME = '^[a-zA-Z ]{2,20}$';
  PAT_EMAIL = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$';
  hide: boolean = true;
  checkboxhide = false;
  today: Date;

  constructor(
    private fb: FormBuilder,
    private query: SessionQuery,
    private serviceCustomer: CustomerService,
    private serviceClint: ClientService
  ) {
    
    this.form = this.fb.group({
      id: null,
      name: [, [Validators.required, Validators.pattern(this.PAT_NAME)]],
      contact_number: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          ),
        ],
      ],
      created: moment().format('YYYY-MM-DD HH:mm:ss'),
      address: [, [Validators.required]],
      status: '1',
      email: [, [Validators.required, Validators.pattern(this.PAT_EMAIL)]],
     // password: [, [Validators.required, Validators.minLength(6)]],
      appointment_date: [, [Validators.required]],
      entry_status: [, [Validators.required]],
      visitor_role: [, Validators.required],
      customer_id: [, Validators.required],
      client_id: [, Validators.required],
      reason: [, Validators.required],
    });
  }

  ngOnInit(): void {
     this.today = new Date();
    let datas = [];
    if (this.user === 'client') {
      this.hide = false;
      this.checkbox = false;
    }
    if (this.user == 'customer' || this.user == 'security') {
      this.checkbox = false;
      this.serviceClint.get().subscribe((data) => {
        console.log(data.data);
        if (data.status === 1) {
          for (let i = 0; i < data.data.length; i++) {
            datas.push({
              id: data.data[i].id,
              name: data.data[i].name,
            });
          }
          this.data = datas;
        }
      });
    }
    if (this.role == 'Customer' || this.role == 'Security') {
      this.hide = false;
      this.serviceCustomer.get().subscribe((data) => {
        console.log(data.data);
        if (data.status === 1) {
          for (let i = 0; i < data.data.length; i++) {
            datas.push({
              id: data.data[i].id,
              name: data.data[i].name,
            });
          }
          this.data = datas;
        }
      });
    }
  }

  onSubmit() {
    let value = {};
    if (this.user == 'client') {
      value = {
        id: this.form.value.id,
        name: this.form.value.name,
        contact_number: this.form.value.contact_number,
       // password: this.form.value.password,
        address: this.form.value.address,
        email: this.form.value.email,
        status: this.form.value.status,
        created: this.form.value.created,
      };
      this.formSubmit.emit(value);
    } else if (this.user == 'customer' || this.user == 'security') {
      value = {
        id: this.form.value.id,
        name: this.form.value.name,
        contact_number: this.form.value.contact_number,
        password: this.form.value.password,
        address: this.form.value.address,
        email: this.form.value.email,
        status: this.form.value.status,
        created: this.form.value.created,
        client_id: this.form.value.client_id,
      };
      this.formSubmit.emit(value);
    } else if (this.role == 'Customer' || this.role == 'Security') {
      if (this.form.value.entry_status == true) {
        value = {
          id: this.form.value.id,
          name: this.form.value.name,
          contact_number: this.form.value.contact_number,
          address: this.form.value.address,
          status: this.form.value.status,
          reason: this.form.value.reason,
          appointment_date: this.form.value.appointment_date,
          entry_status: '1',
          visitor_role: this.form.value.visitor_role,
          customer_id: this.form.value.customer_id,
          email: this.form.value.email,
        };
      }
      {
        value = {
          id: this.form.value.id,
          name: this.form.value.name,
          contact_number: this.form.value.contact_number,
          address: this.form.value.address,
          status: this.form.value.status,
          reason: this.form.value.reason,
          appointment_date: this.form.value.appointment_date,
          entry_status: '0',
          email: this.form.value.email,
          visitor_role: this.form.value.visitor_role,
          customer_id: this.form.value.customer_id,
        };
      }

      this.formSubmit.emit(value);
    }
  }

  onCancel() {
    this.formClose.emit();
  }
  changeWebsite(e: any) {
    e.target.value == 'delviery'
      ? (this.checkboxhide = true)
      : (this.checkboxhide = false);
  }
}
