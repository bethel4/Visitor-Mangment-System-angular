import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../../shared/tables/company';
import {VistiorService} from '../state/vistior.service'
import {VisitorQuery} from '../state/visitore.query'
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  rows = [];
  public company = [];
data:any
  temp = [];

  columns = [
    { name: 'id' },
    { prop: 'visitor' },
    { name: 'Address' },
    { name: 'Timein ' },
    { name: 'Timeout ' },
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
    private router: Router
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
    console.log(data.data.length)
    if(data.status ===1){
      
      for (let i = 0; i < data.data.length; i++) {
   
     datas.push({
          id: data.data[i].id,
          visitor: data.data[i].visitor   ,
         // telephone:data.data[i].contact_number,
          approvalStatus:data.data[i].approval_status,
          customer:data.data[i].customer_name,  
            address: data.data[i].address,
          timein:data.data[i].created,
         timeout: data.data[i].timeout,
          reason:data.data[i].reason,
          approvalTime: data.data[i].approval_time,
        });
      }
    this.data=datas

    }
   
    });
   console.log(this.data);
  }


  
}
