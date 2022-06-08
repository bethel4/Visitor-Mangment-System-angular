import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../..//shared/tables/company';
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

  data: any;
  temp = [];

  columns = [
    { name: 'id' },
    { prop: 'name' },
    { name: 'Telephone' },
    { name: 'Address' },
    { name: 'Created ' },
    { name: 'clientName' },
    { name: 'Status' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

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
            telephone: data.data[i].contact_number,
            status: status,
            address: data.data[i].address,
            created: data.data[i].created,
            clientName: data.data[i].client_name,
          });
        }
       return this.data = datas;
      }
    });
  }
  ngOnInit(): void {
    this.onGet();
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
    this.router.navigate(['admin/editcustomer', row.id]);
  }
}
