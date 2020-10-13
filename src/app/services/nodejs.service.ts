import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  constructor(private http: HttpClient) { }

  insert(params) {
    return this.http.post('http://127.0.0.1:8887/quotes/', { params });
  }

  update(params) {
    return this.http.patch('http://127.0.0.1:8887/quotes/updateQuote/', { params });
  }

  retrieve(params) {
    return this.http.get('http://127.0.0.1:8887/quotes/selectQuote/', { params });
  }

  retrieveAll() {
    return this.http.get('http://127.0.0.1:8887/quotes/');
  }
}
