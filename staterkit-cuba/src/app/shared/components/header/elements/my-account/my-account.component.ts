import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionQuery } from 'src/app/auth/state/session.query';
import { SessionService } from 'src/app/auth/state/session.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(private service: SessionService, private  query :SessionQuery, private router: Router) {}
name:any;
route
role= this.query.isRole()
  ngOnInit() {
    
    if(this.role=='admin'||this.role=='Super Admin'){
      this.route='admin/user'
    }
    if(this.role=='Customer'){
      this.route='customer/user'
    }
    if(this.role=='Security'){
      this.route='security/user'
    }
  this.query.selectAll().subscribe(data=>{
      this.name=data.data.name;
      this.role=data.data.role;
    });
  }
  onLogout(): void {
    console.log('ds')
    this.router.navigate(['/login']);
    this.service.logout();
  }
}
