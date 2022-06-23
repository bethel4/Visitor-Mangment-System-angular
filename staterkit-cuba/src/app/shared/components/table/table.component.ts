import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { Column } from '../../components/table/model/column.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() user_data: any;
  @Input() columns: Column[];
  @Output() onedit = new EventEmitter<any>();
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
  constructor(private query: SessionQuery) {}

  ngOnInit(): void {
    if (this.columns[4].name == 'reason') {
      this.hide = true;
    }
    if (this.query.isRole() == 'Customer') {
      this.buttonHide = false;
      this.hide = true;
    }
    if(this.query.isRole()=='Security'){
      this.check= false
      this.hide = true;
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
