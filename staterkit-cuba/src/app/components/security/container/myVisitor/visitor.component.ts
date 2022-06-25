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

  cols = [
    { name: 'id', label:'S.NO'},
    { name: 'visitor', label:'Visitor'},
    { name: 'address', label:'Address'},
    { name: 'reason', label:'Reason'},
    { name:'contact_number', label: 'Mobile'},
    {name:'customer_name',label:'Customer Name'},
    { name: 'timein', label:'Timein'},
    { name: 'timeout' ,label:'Timeout'},
    { name: 'approval_status', label:'ApprovalStatus'},
    { name: 'approval_time', label:'Approval Time'},
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  interval: number;

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
getRequest(){
  let datas=[]
  this.service.get().subscribe((data) => {
    console.log(data)
    if(data.status){
      console.log('kkk')
      for (let i = 0; i < data.data.length; i++) {
     datas.push({
          id: data.data[i].id,
          visitor: data.data[i].visitor   ,
          contact_number:data.data[i].contact_number,
          approval_status:data.data[i].approval_status,
          customer_name:data.data[i].customer_name,  
            address: data.data[i].address,
          timein:data.data[i].time_in,
          timeout: data.data[i].time_out,
          reason:data.data[i].reason,
          approval_time: data.data[i].approval_time,
        });
      }
    this.data=datas

    }
    });
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
    this.getRequest();
    this.interval = setInterval(() => { this.getRequest(); }, 5000);
   
   }
   ngOnDestroy() {
     if (this.interval) {
       clearInterval(this.interval);
     }
   }


  onCheckOut(event: any): void {
    let data 
        console.log(event.timein)
       
    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = event.id;
    if(event.timein==null) {
      data = {
        id: selectedId,
        time: date,
        status:1
      }
    }else{
      data = {
        id: selectedId,
        time: date,
        status:0
      }  
    }
  
    this.service.updateTime(data).subscribe(res=>{
      if(res.status){
        this.toster.success(res.message);
        this.getRequest()
      }else {
        this.toster.error(res.message);
      }
    });
  
  }
  
}
