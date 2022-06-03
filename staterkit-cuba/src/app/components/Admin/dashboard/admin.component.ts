import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../shared/tables/company';

import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  rows = [];
  public company = [];

  temp = [];

  columns = [
    { prop: 'name' },
    {name:'Roll'},
    { name: 'Visitor' },
    { name: 'Adress' },
    { name: 'Customer' },
    { name: 'Timein' },
    {name:'Timeout'},
    {name:'Reasons'},
    {name:'	Approval Status'},
    {name:'	Approval Time'},
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor() {
    this.company = companyDB.data;
      // cache our list
      this.temp = [...   this.company];

      // push our inital complete list
      this.rows =    this.company;
   
  }

  updateFilter(event) {
  
    const val = event.target.value.toLowerCase();
        console.log(val)
    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  ngOnInit(): void {
    console.log('dfsd')
  }

}