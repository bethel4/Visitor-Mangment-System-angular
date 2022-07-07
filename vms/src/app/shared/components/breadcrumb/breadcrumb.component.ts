import { Component, OnInit, Input } from '@angular/core';
import { SessionQuery } from 'src/app/auth/state/session.query';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  items: any=[];
  title
  constructor(private query: SessionQuery) {}

  ngOnInit() {
    if (this.query.isRole() == 'Admin'||this.query.isRole()=='superAdmin') {
      this.title='Admin/clint'
      console.log(this.title)
    }else if (this.query.isRole() == 'Customer'){
      this.title='Customer/WaitingVisitor'
    }else if (this.query.isRole() == 'Security'){
      this.title='Security/TodayVisitor'
    }
  }
}
