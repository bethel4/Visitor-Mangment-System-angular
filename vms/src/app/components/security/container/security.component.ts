import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../shared/tables/company';

import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { NavigationEnd, Router } from '@angular/router';
import { VisitorQuery } from '../../Admin/visitor/state/visitore.query';
import { VistiorService } from '../../Admin/visitor/state/vistior.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
declare var require
const Swal = require('sweetalert2')

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  someSubscription: any;
  data: any;
  page = 1;
  pageSize = 3;

  cols = [
    { name: 'visitor', label: 'Visitor' },
    // { name: 'address', label:'Address'},
    // { name: 'reason', label:'Reason'},
    // { name:'contact_number', label: 'Mobile'},
    { name: 'customer_name', label: 'Customer' },
    { name: 'timein', label: 'Timein' },
    { name: 'timeout', label: 'Timeout' },
    { name: 'approval_status', label: 'ApprovalStatus' },
    { name: 'approved_time', label: 'Approval Time' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  interval: number;
  collectionSize: number;

  constructor(
    private service: VistiorService,
    private query: VisitorQuery,
    private router: Router,
    public toster: ToastrService
  ) {}

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

  getRequest() {
    let datas = [];
    this.service.get().subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log('kkk');
        for (let i = 0; i < data.data.length; i++) {
          datas.push({
            id: data.data[i].id,
            visitor: data.data[i].visitor,
            contact_number: data.data[i].contact_number,
            approval_status: data.data[i].approval_status,
            customer_name: data.data[i].customer_name,
            address: data.data[i].address,
            timein: data.data[i].time_in,
            timeout: data.data[i].time_out,
            reason: data.data[i].reason,
            approved_time: data.data[i].approved_time,
            created: data.data[i].created,
          });
        }
        this.data = datas;
        this.collectionSize = datas.length;
      }else{
        this.data= [];
      }
    });
  }
  ngOnInit(): void {
    this.getRequest();
    this.interval = setInterval(() => {
      this.getRequest();
    }, 5000);
  }
  refreshCountries() {
    console.log(this.data);
    this.data
      .map((data, i) => ({ id: i + 1, ...data }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }


  onView(row) {
    console.log(row);
    this.router.navigate(['security/visitor_detail', row.id]);
  }


  onCheckInAlert(event) {
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = event.id;
    let data = {
      id: selectedId,
      time: date,
      status: 1,
    };

    this.service.updateTime(data).subscribe((result) => {
      if (result.status) {
        this.getRequest();
        Swal.fire(
          result.message,
         
        )
      } else {
        Swal.fire(
          result.message,
         
        )
      }
    });
 
  }
  onCheckoutAlert(user:any) {
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = user.id;
    let data = {
      id: selectedId,
      time: date,
      status: 0,
    };

    this.service.updateTime(data).subscribe((result) => {
      if (result.status) {
        this.getRequest();
        Swal.fire(
          result.message,
        )
      } else {
        Swal.fire(
          result.message,
        )
      }
    });
  
  }
}
