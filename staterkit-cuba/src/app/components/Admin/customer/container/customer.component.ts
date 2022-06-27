import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../../shared/tables/company';
import { CustomerService } from '../state/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerQuery } from '../state/customer.query';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  rows = [];
  public company = [];
  page = 1;
  pageSize = 3;
  data: any;
  temp = [];

  cols = [
<<<<<<< HEAD
=======
    { name: 'id', label: 'S.NO' },
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'address', label: 'Adress' },
    { name: 'contact_number', label: 'Mobile' },
    { name: 'clientName', label: 'Client Name' },
    { name: 'created', label: 'Created' },
    { name: 'status', label: 'Status' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
<<<<<<< HEAD
  collectionSize: any;
=======
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4

  constructor(
    private service: CustomerService,
    private query: CustomerQuery,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.company = companyDB.data;
    // cache our list
    this.temp = [...this.company];

    // push our inital complete list
    this.rows = this.company;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    console.log(val);
    // filter our data
    const temp = this.data.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.data = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  onGet() {
    let datas = [];
    this.service.get().subscribe((data) => {
      console.log(data.data.length);
      if (data.status === 1) {
        for (let i = 0; i < data.data.length; i++) {
          let status;
          if (data.data[i].status == 1) {
            status = 'Active';
          } else if (data.data[i].status == 0) {
            status = 'Inactive';
          }
          datas.push({
            id: data.data[i].id,
            name: data.data[i].name,
            contact_number: data.data[i].contact_number,
            status: status,
            address: data.data[i].address,
            created: data.data[i].created,
            email:data.data[i].email,
            clientName: data.data[i].client_name,
          });
        }
      this.data = datas;
<<<<<<< HEAD
      this.collectionSize=this.data.length;
=======
>>>>>>> 311272ad4dc7bb93a7ed4348ac26ab148663e9d4
      }
    });
  }
  ngOnInit(): void {
    this.onGet();
  }
  refreshCountries() {
    console.log(this.data)
    this.data.map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  onDelete(event: any) {
    console.log(event);
    const selectedId = event.id;
    this.service.delete(selectedId).subscribe((res) => {
      if (res.status) {
        this.toaster.success(res.message);
        this.onGet();
      } else {
        this.toaster.error(res.message);
      }
    });
  }
  onSelect(row) {
    console.log(row.id);
    this.router.navigate(['SuperAdmin/editcustomer', row.id]);
  }
}
