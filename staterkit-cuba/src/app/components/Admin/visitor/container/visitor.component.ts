import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../../shared/tables/company';
import { VistiorService } from '../state/vistior.service';
import { VisitorQuery } from '../state/visitore.query';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorComponent implements OnInit {
  rows = [];
  public company = [];
  page = 1;
  pageSize = 3;
  data: any;
  temp = [];

<<<<<<< HEAD
  cols = [
    { name: 'name', label: 'Visitor' },
    { name: 'contact_number', label: 'Mobile' },
    { name: 'created', label: 'Created' },
    { name: 'reason', label: 'Reason' },
    { name: 'address', label: 'Address' },
    { name: 'status', label: 'ApprovalStatus' },
=======
  columns = [
    { name: 'id', label:'S.NO'},
    { name: 'visitor', label:'Visitor'},
    { name:'contact_number',label:'Mobile'},
    { name: 'address', label:'Address'},
    { name: 'reason', label:'Reason'},
    {name:'customer_name',label:'Customer Name'},
    { name:'security_name',label:'Security Name'},
    { name: 'Timein', label:'Timein'},
    { name: 'Timeout' ,label:'Timeout'},
    { name: 'approval_status', label:'ApprovalStatus'},
    {name: 'ApprovalTime', label:'ApprovalTime'}
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  collectionSize: any;

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
    let datas = [];
    this.service.get().subscribe((data) => {
<<<<<<< HEAD
      console.log(data.data);
      if (data.status === 1) {
        for (let i = 0; i < data.data.length; i++) {
        
          datas.push({
            id: data.data[i].id,
            name: data.data[i].visitor,
            contact_number: data.data[i].contact_number,
            address: data.data[i].address,
            reason: data.data[i].reason,
            customer_name: data.data[i].customer_name,
            client_name: data.data[i].client_name,
            created: data.data[i].created,
            status: data.data[i].approval_status,
            
          });
        }
        this.data = datas;
        this.collectionSize = this.data.length;
=======
    console.log(data.data)
    if(data.status ===1){
      
      for (let i = 0; i < data.data.length; i++) {
  
     datas.push({
          id: data.data[i].id,
          visitor: data.data[i].visitor   ,
          contact_number: data.data[i].contact_number,
          address: data.data[i].address,
          reason:data.data[i].reason,
          customer_name:data.data[i].customer_name, 
          security_name: data.data[i].security_name,
          timein:data.data[i].created,
         timeout: data.data[i].timeout,
         approval_status:data.data[i].approval_status,
          approvalTime: data.data[i].approval_time,
        });
>>>>>>> 891d2e9fcc27142aebe4451a7860101024eab55c
      }
    });
    console.log(this.data);
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
  onView(row){
    console.log(row.id);
    this.router.navigate(['SuperAdmin/visitor_detail',row.id])
  }
}
