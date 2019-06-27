import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpReqOptions } from '../../shared/classes/http-req-options';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  send(method: string, config: HttpReqOptions): Promise<any> {
    let params = new HttpParams();
    for (const key of Object.keys(config.params)) {
      params = params.append(key, config.params[key]);
    }
    const reqOptions = {
      body: config.body,
      withCredentials: false,
      params
    };

    return this.http.request<any>(method.toUpperCase(), config.url, {  body: config.body, params })
    .toPromise()
    .then(res => this.httpSucess(res))
    .catch((error) => this.httpError(error));
  }

  private httpSucess(res: Response): Promise<any> {
    const body: any = res || {message: 'Request success'};
    if (body) {
      return Promise.resolve(body);
    } else {
      throw new Error(body.message);
    }
  }

  private httpError(error: any) {
    alert('Request error');
    throw new Error(error);
  }

}
