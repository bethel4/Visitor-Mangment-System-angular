import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { CustomerService } from '../../state/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  form: FormGroup;
  hide = false;
  disable = true;
  clients: any[];
 
  selectedCityCode: string;

  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
   
  ) {
    this.form = this.fb.group({
      id: null,
      name: [[Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      contact_number: [
        ,
        [
          Validators.required,
          Validators.pattern(
            /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/
          ),
        ],
      ],
      created: [],
      address: [, [Validators.required]],
      status: [],
      email: [, [Validators.required, Validators.email]],
      password: [, [Validators.required, Validators.minLength(6)]],
      client_id: [, Validators.required],
    });
    // this.clients = this.config.formData.clients[1];
  }

  ngOnInit(): void {}
  onSubmit() {
    this.formSubmit.emit(this.form.value);
  }

  onCancel() {
    this.formClose.emit();
  }
}
