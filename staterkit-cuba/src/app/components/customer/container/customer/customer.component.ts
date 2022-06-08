import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomerQuery } from '../../../Admin/customer/state/customer.query';
import { VistiorService } from '../../../Admin/visitor/state/vistior.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  ColumnMode = ColumnMode;

  data: any[];
  rows = [];
  public company = [];

  temp = [];
  interval: number;

  constructor(private service: VistiorService, private query: CustomerQuery, public toster: ToastrService,) {
    //  this.company = companyDB.data;
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
  columns = [
    { name: 'id' },
    { prop: 'visitor' },
    { name: 'Address' },
    { name: 'Timein ' },
    { name: 'Timeout' },
    { name: 'reason ' },
    { name: 'customer' },
    { name: 'ApprovalStatus' },
    { name: 'ApprovalTime' },
  ];
  getRequest() {
    let datas = [];
    this.service.getRequest().subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log('kkk');
        for (let i = 0; i < data.data.length; i++) {
          datas.push({
            id: data.data[i].id,
            visitor: data.data[i].visitor,
            // telephone:data.data[i].contact_number,
            approvalStatus: data.data[i].approval_status,
            customer: data.data[i].customer_name,
            address: data.data[i].address,
            timein: data.data[i].time_in,
            timeout: data.data[i].time_out,
            reason: data.data[i].reason,
            approvalTime: data.data[i].approval_time,
          });
        }
        return this.data = datas;
      } else {
        return this.data = [];
      }
    });
  }
  ngOnInit(): void {
    this.getRequest();
    this.interval = setInterval(() => { this.getRequest(); }, 5000);
   
   }
   ngOnDestroy() {
     if (this.interval) {
       clearInterval(this.interval);
     }
   }
 
  onApprove(data: any) {
    console.log(data);
    let value = {
      approval_status: 'Approved',
      id: data.id,
      approve_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    this.service.requestStatus(value).subscribe(res=>{
      if (res.status == 1) {
        this.toster.success(res.message);
        this.getRequest();
      } else {
        this.toster.error(res.message);
      }
    });
    
  }
  onReject(data: any) {
    let value = {
      approval_status: 'Rejected',
      id: data.id,
      approve_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    this.service.requestStatus(value).subscribe(res=>{
      if (res.status == 1) {
        this.toster.error(res.message);
        this.getRequest();
      } else {
        this.toster.error(res.message);
      }
    });
  }
}
