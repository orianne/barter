import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { environment } from "../environments/environment";
import { RequestOptions } from '@angular/http';

@Injectable()
export class BarterService {
  private apiUrl = environment.apiUrl
  headers: HttpHeaders


  constructor(private http: HttpClient) { }

  addProduct(product) {
    this.headers = new HttpHeaders();
    this.headers = this.headers.set('content-type', 'application/x-www-form-urlencoded');
    return this.http.post<any>(this.apiUrl + `addProduct?name=${product.name}&desc=${product.desc}&image=${product.image}&userId=${product.userId}`,'')
      .toPromise()
  }

  addLike(userId,productId) {
    this.headers = new HttpHeaders();
    this.headers.append('content-type', 'application/x-www-form-urlencoded');
    return this.http.post<any>(this.apiUrl + `addLike?userId=${userId}&productId=${productId}`,'')
      .toPromise()
  }

  getAllProducts() {
    return this.http.get<any>(this.apiUrl + `getAllProducts`)
      .toPromise()
  }


}
