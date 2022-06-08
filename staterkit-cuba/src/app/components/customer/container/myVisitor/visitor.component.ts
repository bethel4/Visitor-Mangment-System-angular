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
    { name: 'roll' },
    { prop: 'visitor' },
    { name: 'Address' },
    { name: 'Timein ' },
    { name: 'Timeout' },
    { name: 'reason ' },
    {name:'customer'},
    { name: 'ApprovalStatus' },
    {name: 'ApprovalTime'}
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
  ngOnInit(): void {
    let datas=[]
    this.service.get().subscribe((data) => {
    console.log(data)
    if(data.status){
      console.log('kkk')
      for (let i = 0; i < data.data.length; i++) {
     datas.push({
          roll: data.data[i].id,
          visitor: data.data[i].visitor   ,
         // telephone:data.data[i].contact_number,
          approvalStatus:data.data[i].approval_status,
          customer:data.data[i].customer_name,  
            address: data.data[i].address,
          timein:data.data[i].time_in,
          timeout: data.data[i].time_out,
          reason:data.data[i].reason,
          approvalTime: data.data[i].approval_time,
        });
      }
    this.data=datas

    }
    });
   console.log(this.data);
  }


  onCheckOut(event: any): void {
    let datas=[]
    console.log(event);
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = event.roll;
    let data = {
      id: selectedId,
      exitTime: date,
    };
console.log('sada')
    this.service.updateTime(data).subscribe();
    this.service.getRequest().subscribe((data) => {
      console.log(data)
      if(data.status){
        console.log('kkk')
        for (let i = 0; i < data.data.length; i++) {
       datas.push({
            roll: data.data[i].id,
            visitor: data.data[i].visitor   ,
           // telephone:data.data[i].contact_number,
            approvalStatus:data.data[i].approval_status,
            customer:data.data[i].customer_name,  
              address: data.data[i].address,
            timein:data.data[i].time_in,
            timeout: data.data[i].time_out,
            reason:data.data[i].reason,
            approvalTime: data.data[i].approval_time,
          });
        }
      this.data=datas
  
      }
      });
  }
  onApprove(data:any) {
    console.log(data);
    let value={
      approval_status:"Approved",
      id:data.roll,
      approve_time:moment().format('YYYY-MM-DD HH:mm:ss')
    }
    this.service.requestStatus(value).subscribe()
  }
  onReject(data:any) {
    
    let value={
      approval_status:"Rejected",
      id:data.roll,
      approve_time:moment().format('YYYY-MM-DD HH:mm:ss')
    }
    this.service.requestStatus(value).subscribe()
  }
}
