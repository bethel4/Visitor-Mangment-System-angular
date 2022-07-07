import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { Column } from './model/column.model';

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
  }

  onEdit(item: any) {
    this.onedit.emit(item);
  }
  onDelete(item: any) {
    this.ondelete.emit(item);
  }
  onView(item: any) {
    this.view.emit(item);
  }
}
