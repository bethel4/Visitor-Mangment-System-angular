import { Component, OnInit, Input } from '@angular/core';
import * as feather from 'feather-icons';
import { SessionQuery } from 'src/app/auth/state/session.query';

@Component({
  selector: 'app-feather-icons',
  templateUrl: './feather-icons.component.html',
  styleUrls: ['./feather-icons.component.scss']
})
export class FeatherIconsComponent implements OnInit {

  @Input('icon') public icon;
  hide=true
  constructor( private query:SessionQuery,) { }

  ngOnInit() {
    if(this.query.isRole()=='Security'||this.query.isRole()=='Customer'){
      this.hide=false
    }
    setTimeout(() => {
      feather.replace();
    });
  }

}
