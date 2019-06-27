// docs: https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
import {UNAUTHORIZED, FORBIDDEN} from 'http-status-codes';
import { Router } from '@angular/router';
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

        return next.handle(req).pipe(catchError(resp => this.errorHandler(resp)));
    }

    private errorHandler(resp: HttpEvent<any>): Observable<HttpEvent<any>> {

        const httpErrCode = resp['status'];
        switch(httpErrCode) {
            case UNAUTHORIZED: this.router.navigateByUrl('/login'); break;
            case FORBIDDEN: this.router.navigateByUrl('/403'); break; 
        }
        throw resp;
    }
}