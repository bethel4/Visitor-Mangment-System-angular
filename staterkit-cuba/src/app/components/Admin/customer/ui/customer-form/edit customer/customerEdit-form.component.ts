import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CustomerQuery} from '../../../state/customer.query'
import { CustomerService} from '../../../state/customer.service'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-customerEdit-form',
  templateUrl: './customerEdit-form.component.html',
  styleUrls: ['./customerEdit-form.component.scss'],
})
export class CustomerFormEditComponent implements OnInit {
  clients$: Observable<any> = this.service.get();
  form: FormGroup;
  data: any;
  row:any;
  isFormSubmitted=false
   selectedID: any=this.route.snapshot.paramMap.get('id'); ;
  constructor(
    private fb: FormBuilder,
    private service: CustomerService,
    public toster: ToastrService,
    private query: CustomerQuery,
    private route: ActivatedRoute,
    public router: Router
  ) {
    const PAT_NAME = "^[a-zA-Z ]{2,20}$";
    const PAT_EMAIL = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$";

    this.form = this.fb.group({
      id: this.selectedID,
      name: [, [Validators.required,  Validators.pattern(PAT_NAME)]], 
      address: [, [Validators.required]],
      status: '1',
      email: [, [Validators.required,  Validators.pattern(PAT_EMAIL)]],
      client_id:[, [Validators.required]]
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
      console.log(this.data)
    });
   

  }
  onSubmit() {
    this.isFormSubmitted=true
    console.log(this.form.value)
    this.service.update(this.form.value).subscribe((res: any) => {
      if (res.status == 1) {
        this.toster.success(res.message);
<<<<<<< HEAD
        this.router.navigate(['SuperAdmin/customers'])
=======
        this.router.navigate(['admin/customers'])
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
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
