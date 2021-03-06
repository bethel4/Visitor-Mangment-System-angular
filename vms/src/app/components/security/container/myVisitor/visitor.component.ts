import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../../shared/tables/company';

import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Router } from '@angular/router';
import { VisitorQuery } from '../../../Admin/visitor/state/visitore.query';
import { VistiorService } from '../../../Admin/visitor/state/vistior.service';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
})
export class VisitorsComponent implements OnInit {
  rows = [];
  public company = [];
  data: any;
  temp = [];
  page = 1;
  pageSize = 6;

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;
  interval: number;
  collectionSize: number;

  constructor(
    private service: VistiorService,
    private query: VisitorQuery,
    private router: Router,
    public toster: ToastrService
  ) {
    this.company = companyDB.data;
    // cache our list
    this.temp = [...this.company];

    // push our inital complete list
    this.rows = this.company;
  }
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
            email: data.data[i].email,
            contact_number: data.data[i].contact_number,
            approval_status: data.data[i].approval_status,
            customer_name: data.data[i].customer_name,
            address: data.data[i].address,
            timein: data.data[i].time_in,
            timeout: data.data[i].time_out,
            reason: data.data[i].reason,
            approved_time: data.data[i].approved_time,
          });
        }
        this.data = datas;
        this.collectionSize = datas.length;
      }
    });
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
    this.interval = setInterval(() => {
      this.getRequest();
    }, 5000);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  onCheckOut(event: any): void {
    let data;
    console.log(event.timein);

    var date = moment().format('YYYY-MM-DD HH:mm:ss');
    const selectedId = event.id;
    if (event.timein == null) {
      data = {
        id: selectedId,
        time: date,
        status: 1,
      };
    } else {
      data = {
        id: selectedId,
        time: date,
        status: 0,
      };
    }

    this.service.updateTime(data).subscribe((res) => {
      if (res.status) {
        this.toster.success(res.message);
        this.getRequest();
      } else {
        this.toster.error(res.message);
      }
    });
  }

  onView(row) {
    console.log(row);
    this.router.navigate(['security/visitor_detail', row.id]);
  }
}
