import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../../shared/tables/company';

import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { VisitorQuery } from '../../../Admin/visitor/state/visitore.query'
import { VistiorService } from '../../../Admin/visitor/state/vistior.service'
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorsComponent implements OnInit {
  rows = [];
  public company = [];
data:any
  temp = [];
  page = 1;
  pageSize = 3;
  columns = [
    { name: 'visitor', label:'Visitor'},
    // { name:'contact_number',label:'Mobile'},
    // { name: 'address', label:'Address'},
    // { name: 'reason', label:'Reason'},
    { name:'security_name',label:'Security'},
    { name: 'time_in', label:'Timein'},
    { name: 'time_out' ,label:'Timeout'},
    { name: 'approval_status', label:'ApprovalStatus'},
    {name: 'approved_time', label:'ApprovalTime'}
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  interval: number;
  collectionSize: any;

  constructor(
    private service: VistiorService,
    private query: VisitorQuery,
    private router: Router,
    public toster: ToastrService,
  ) {
    
    this.company = companyDB.data;
    // cache our list
    this.temp = [...this.company];

    // push our inital complete list
      this.rows = this.company;
    
  }

  refreshCountries() {
    console.log(this.data)
    this.data.map((data, i) => ({id: i + 1, ...data}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
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
  get() {
    let datas = [];
    this.service.get().subscribe((data) => {
      console.log(data);
      if (data.status) {
        console.log('kkk');
        for (let i = 0; i < data.data.length; i++) {
          datas.push({
            id: data.data[i].id,
            visitor: data.data[i].visitor,
            contact_number:data.data[i].contact_number,
            address: data.data[i].address,
            reason: data.data[i].reason,
            customer_name: data.data[i].customer_name,
            security_name: data.data[i].security_name,
            time_in: data.data[i].time_in,
            time_out: data.data[i].time_out,
            approval_status: data.data[i].approval_status,
            approved_time: data.data[i].approved_time,
          });
        }
        this.collectionSize= datas.length
        return this.data = datas;
      } else {
        return this.data = [];
      }
    });
  }
  ngOnInit(): void {
this.get()
this.interval = setInterval(() => { this.get() }, 5000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onCheckOut(event: any): void {
    let datas=[]
    console.log(event);
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = event.id;
    let data = {
      id: selectedId,
      exitTime: date,
    };
console.log('sada')
    this.service.updateTime(data).subscribe();
    this.get()
  }
  onApprove(data: any) {
    console.log(data.id);
    let value = {
      approval_status: 'approved',
      id: data.id,
      approve_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    this.service.requestStatus(value).subscribe(res=>{
      if (res.status == 1) {
        this.toster.success(res.message);
        this.get();
      } else {
        this.toster.error(res.message);
      }
    });
    
  }
  onReject(data: any) {
    let value = {
      approval_status: 'rejected',
      id: data.id,
      approve_time: moment().format('YYYY-MM-DD HH:mm:ss'),
    };
    this.service.requestStatus(value).subscribe(res=>{
      if (res.status == 1) {
        this.toster.error(res.message);
        this.get();
      } else {
        this.toster.error(res.message);
      }
    });
  }
  onView(row){
    console.log(row);
    this.router.navigate(['customer/visitor_detail',row.id])
  }
}
