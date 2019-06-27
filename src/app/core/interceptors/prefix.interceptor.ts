// docs: https://blog.angularindepth.com/top-10-ways-to-use-interceptors-in-angular-db450f8a62d6
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler,HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class PrefixInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    //caching
    let noCacheStr = Date.now().toString();
    let url = "https://dev-api.kireipass.jp/api/v1" + req.url;
    url = url.replace("http://", "https://");
    const httpsReq = req.clone({
      // convert http -> https
      url: url,

      // set headers
      setHeaders: {
        'Content-Type': 'application/json; charset=utf-8',
      },

      // set params
      setParams: {
        dummy: noCacheStr,
      }
    })

    return next.handle(httpsReq);
  }
}