import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/auth/state/session.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss'],
})
export class MyAccountComponent implements OnInit {
  constructor(private service: SessionService, private router: Router) {}

  ngOnInit() {}
  onLogout(): void {
    console.log('ds')
    this.router.navigate(['/login']);
    this.service.logout();
  }
}
