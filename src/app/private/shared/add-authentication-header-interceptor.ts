import { AuthenticateService } from './authenticate.service';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import 'rxjs/add/operator/do';

@Injectable()
export class AddAuthenticationHeaderInterceptor implements HttpInterceptor {
  constructor(private inj: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intertcepting request ..');
    console.log('ici1');
    console.log(localStorage.getItem('token'));
    const authReq = req.clone({
      headers: req.headers
        .set('Authorization', 'Bearer ' + localStorage.getItem('token'))
        .set('Accept', '*/*')
    });
    return next
      .handle(authReq)
      .do(event => { },
      (err: any) => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          if (err.status === 401) {
            console.log('sending Auth request again!!!!!');
          }
        }
      }
      );
  }
}
