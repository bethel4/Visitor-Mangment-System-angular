import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ClientService } from '../../../client/state/client.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter<any>();
  @Output() formClose = new EventEmitter<void>();
  form: FormGroup;
  hide = true;
  disable=true;
  clients: any[];
  
  constructor(
    private fb: FormBuilder,
    private service: ClientService,
  ) {
    this.form = this.fb.group({
      id: null,
      name:['d',  [Validators.required,Validators.pattern(/^[a-zA-Z]*$/)]],
      contact_number: ['k', [Validators.required,Validators.pattern( /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/)]],
      created:moment().format('YYYY-MM-DD HH:mm:ss'),
      address: [, [Validators.required]],
      status: "1",
      email:[, [Validators.required,Validators.email]],
      password:[, [Validators.required,Validators.minLength(6)]],
        });
      }
      
  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.form.value)
  }

  onCancel() {
    this.formClose.emit();
  }
 
}
