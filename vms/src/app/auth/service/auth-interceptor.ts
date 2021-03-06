import { Injectable } from '@angular/core';
import {
  HttpHeaders,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SessionQuery } from '../state/session.query';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor {
  constructor(private query: SessionQuery, private router: Router) {}

  getHeader() {
    const token = this.query.accessToken;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: ` ${token}`,
    });
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith('/login')) {
      return next.handle(req);
    }
    const header = this.getHeader();
    const newReq = req.clone({ headers: header });
    return next.handle(newReq);
  }
}
