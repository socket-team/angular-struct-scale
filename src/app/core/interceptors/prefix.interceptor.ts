// docs: https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    // caching
    const noCacheStr = Date.now().toString();
    let urlRequest =  environment.apiUrl;
    urlRequest = urlRequest.replace('http://', 'https://');
    const httpsReq = req.clone({
      // convert http -> https
      url: urlRequest,

      // set headers
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
      },

      // set params
      setParams: {
        dummy: noCacheStr,
      }
    });
    return next.handle(httpsReq);
  }
}
