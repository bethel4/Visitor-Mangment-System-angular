import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../shared/tables/company';
import { ClientQuery } from '../client/state/client.query';
import { ClientService } from '../client/state/client.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  //client$: Observable<any> = this.query.selectClient();
  rows = [];
  public company = [];
  data: any;
  temp = [];

  columns = [
    { name: 'id' },
    { prop: 'name' },
    { name: 'contact_number' },
    { name: 'Address' },
    { name: 'Created ' },
    { name: 'Status' },
  ];
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(
    private service: ClientService,
    private query: ClientQuery,
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
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }
  ngOnInit(): void {
    this.service.get().subscribe((data) => {
      this.data = data.data;
      console.log(this.data.data);
    });
    console.log('dfsd');
  }
  onClientForm() {
    this.router.navigate(['admin/addclient']);
  }
}
