import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetailPara } from './detail-para';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  /**
   * @getParams returns the data for parameters from the server
   */
  getParams(): Observable<object> {
   return this.httpClient.get('http://127.0.0.1:8080/api/autod/parameters/');
  }

  /**
   * @getDetails returns the details of the parameter selected
   * @param id passes the id of the parameter selected from the server
   */
  getDetails(id): Observable<object> {
    return this.httpClient.get('http://127.0.0.1:8080/api/autod/parameters/details/' + id);
  }

  getGlobal(): Observable<object> {
    return this.httpClient.get('http://127.0.0.1:8080/api/autod/parameters/misc/');
   }

  getDlog(): Observable<object> {
    return this.httpClient.get('http://127.0.0.1:8080/api/autod/logs/');
   }

   getDetailPara(id){
    return this.httpClient.get<DetailPara[]>('http://127.0.0.1:8080/api/autod/parameters/details/' + id);
  }  
}



