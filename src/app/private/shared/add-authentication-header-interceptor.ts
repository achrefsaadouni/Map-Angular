import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import 'rxjs/add/operator/do';
import {Router} from '@angular/router';
import {of} from 'rxjs/observable/of';
export const InterceptorSkipHeader = 'accept';
@Injectable()
export class AddAuthenticationHeaderInterceptor implements HttpInterceptor {
  constructor(private inj: Injector, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intertcepting request ..');
    console.log('ici1');
    console.log(localStorage.getItem('token'));
    if (req.headers.has('authorization')) {
      console.log('skipppp');
      return next.handle(req.clone());
    }
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
           return  this.router.navigateByUrl('login');
          }
           if (err.status === 403) {
            return  this.router.navigateByUrl('login');
          }
        }
        return this.router.navigateByUrl('location');
      }
      );
  }



  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error('user non trouve');
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
