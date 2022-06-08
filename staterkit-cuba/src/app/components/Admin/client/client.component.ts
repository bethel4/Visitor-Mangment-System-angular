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
 
  data:any;
  temp = [];

  columns = [
    { name: 'id' },
    { prop: 'name' },
    { prp: 'Telephone' },
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
        let status;
        if (data.data[i].status == 1) {
          status = 'Active';
        } else if(data.data[i].status ==0){
          status = 'Inactive';
        }
     datas.push({
          id: data.data[i].id,
          name: data.data[i].name,
          telephone:data.data[i].contact_number,
          status: status,
          address: data.data[i].address,
          created:data.data[i].created
        });
      }
    this.data=datas

    }
   
    });
   
  }
  onDelete(event: any) {
    console.log(event);
          const selectedId = event.roll;
          this.service.delete(selectedId).subscribe();
          let datas=[]
    this.service.get().subscribe((data) => {
    
      for (let i = 0; i < data.data.length; i++) {
        let status;
        if (data.data[i].status == 1) {
          status = 'Active';
        } else {
          status = 'Inactive';
        }
     datas.push({
          roll: data.data[i].id,
          name: data.data[i].name,
          telephone:data.data[i].contact_number,
          status: status,
          address: data.data[i].address,
          created:data.data[i].created
        });
      }
    this.data=datas

    });

}
  onSelect(row) {
    console.log(row.id)
 this.router.navigate(['admin/editclient',row.id]);
  }
  
}
