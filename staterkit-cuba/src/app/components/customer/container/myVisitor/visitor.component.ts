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

  columns = [
    { name: 'id', label:'S.NO'},
    { name: 'visitor', label:'Visitor'},
    { name:'contact_number',label:'Mobile'},
    { name: 'address', label:'Address'},
    { name: 'reason', label:'Reason'},
    { name:'security_name',label:'Security Name'},
    { name: 'Timein', label:'Timein'},
    { name: 'Timeout' ,label:'Timeout'},
    { name: 'approval_status', label:'ApprovalStatus'},
    {name: 'approved_time', label:'Approval Time'}
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

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
            timein: data.data[i].time_in,
            timeout: data.data[i].time_out,
            approval_status: data.data[i].approval_status,
            approved_time: data.data[i].approved_time,
          });
        }
        return this.data = datas;
      } else {
        return this.data = [];
      }
    });
  }
  ngOnInit(): void {
this.get()
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
}
