import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { Column } from './model/column.model';
const COUNTRIES: any[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'France',
    flag: 'c/c3/Flag_of_France.svg',
    area: 640679,
    population: 64979548
  },
  {
    name: 'Germany',
    flag: 'b/ba/Flag_of_Germany.svg',
    area: 357114,
    population: 82114224
  },
  {
    name: 'Portugal',
    flag: '5/5c/Flag_of_Portugal.svg',
    area: 92090,
    population: 10329506
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Vietnam',
    flag: '2/21/Flag_of_Vietnam.svg',
    area: 331212,
    population: 95540800
  },
  {
    name: 'Brazil',
    flag: '0/05/Flag_of_Brazil.svg',
    area: 8515767,
    population: 209288278
  },
  {
    name: 'Mexico',
    flag: 'f/fc/Flag_of_Mexico.svg',
    area: 1964375,
    population: 129163276
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'India',
    flag: '4/41/Flag_of_India.svg',
    area: 3287263,
    population: 1324171354
  },
  {
    name: 'Indonesia',
    flag: '9/9f/Flag_of_Indonesia.svg',
    area: 1910931,
    population: 263991379
  },
  {
    name: 'Tuvalu',
    flag: '3/38/Flag_of_Tuvalu.svg',
    area: 26,
    population: 11097
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})

export class TableComponent implements OnInit {
  @Input() user_data: any;
  @Input() columns: Column[];
  @Input() collectionSize:any
  @Output() onedit = new EventEmitter<any>();
  @Output() refreshcountries = new EventEmitter<any>();
  @Output() ondelete = new EventEmitter<any>();
  @Output() onapprove = new EventEmitter<any>();
  @Output() onreject = new EventEmitter<any>();
  @Output() checkout = new EventEmitter<any>();
  @Output() checkin = new EventEmitter<any>();
  @Output() view = new EventEmitter<any>();
  
  hide = false;
  buttonHide = true;
  checkhide=false;
  check=true;
  views: boolean= true;
  constructor(private query: SessionQuery) {}
  page = 1;
  pageSize = 3;
  // collectionSize = COUNTRIES.length;
  
  refreshCountries() {
    this.refreshcountries.emit()
    // this.countries = COUNTRIES
    //   .map((country, i) => ({id: i + 1, ...country}))
    //   .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }


  ngOnInit(): void {
    console.log(this.user_data)
    if (this.columns[2].name == 'reason') {
      this.hide = true;
      this.views = false;
    }
    if (this.query.isRole() == 'Customer') {
      this.buttonHide = false;
      this.hide = true;
      this.views=false;
    }
    if(this.query.isRole()=='Security'){
      this.check= false
      this.hide = true;
      this.views=false;
    }
  }

  onEdit(item: any) {
    this.onedit.emit(item);
  }
  onApprove(data: any) {
    this.onapprove.emit(data);
  }
  onReject(data: any) {
   
    this.onreject.emit(data);
  }
  onDelete(item: any) {
    this.ondelete.emit(item);
  }
  onCheckOut(item: any) {
    this.checkout.emit(item);
  }
  onCheckIn(item: any) {
    this.checkin.emit(item);
  }
  onView(item: any) {
    this.view.emit(item);
  }
}
