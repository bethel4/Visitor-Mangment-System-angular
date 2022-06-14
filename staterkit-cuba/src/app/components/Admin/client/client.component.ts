import { Component, OnInit, ViewChild } from '@angular/core';
import { companyDB } from '../../../shared/tables/company';
import { ClientQuery } from '../client/state/client.query';
import { ClientService } from '../client/state/client.service';
import { DatatableComponent, ColumnMode } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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

  cols = [
    { name: 'id', label: 'S.NO' },
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email' },
    { name: 'address', label: 'Adress' },
    { name: 'contact_number', label: 'Mobile' },
    { name: 'created', label: 'Created' },
    { name: 'status', label: 'Status' },
  ];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  ColumnMode = ColumnMode;

  constructor(
    private service: ClientService,
    private query: ClientQuery,
    private router: Router,
    private toaster:ToastrService
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
  
  onGet(){
    let datas = [];
    this.service.get().subscribe((data) => {
      if (data.status === 1) {
        for (let i = 0; i < data.data.length; i++) {
          let status;
          if (data.data[i].status == 1) {
            status = 'Active';
          } else if (data.data[i].status == 0) {
            status = 'Inactive';
          }
          datas.push({
            id: data.data[i].id,
            name: data.data[i].name,
            contact_number: data.data[i].contact_number,
            status: status,
            address: data.data[i].address,
            created: data.data[i].created,
            email: data.data[i].email,
          });
        }
         this.data = datas;
      }
    });
  }
  ngOnInit(): void {
   this.onGet()
  }
  onDelete(event: any) {
    console.log(event);
    const selectedId = event.id;
    this.service.delete(selectedId).subscribe(res=>{
      if(res.status){
        this.toaster.success(res.message);
        this.onGet()
      }else{
        this.toaster.error(res.message);
      }
    });
    
  }
  onSelect(row) {
    console.log(row);
    this.router.navigate(['admin/editclient', row.id]);
  }
}
