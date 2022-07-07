import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
 import { SessionQuery } from '../state/session.query';

@Injectable({
  providedIn: 'root',
})



  export class AuthRoleClientGuard implements CanActivateChild {
    constructor(private query: SessionQuery, private router: Router) {}
      canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
          console.log(this.query.isRole())
          if (this.query.isRole()==='Client'||this.query.isRole()==='Super Admin'||this.query.isRole()==='Admin') {
             console.log(this.query.isRole())
              return true;
            }
            this.router.navigate(['/login']);
            return false;
          
      }
      
      
  }



