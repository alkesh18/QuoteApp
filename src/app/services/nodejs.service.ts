import { Injectable } from   '@angular/core';
import { HttpClient } from   '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NodejsService {

  constructor(private http: HttpClient) { }

  ip : string = "127.0.0.1:8887";

  insert(params) {
    return this.http.post(`http://${this.ip}/quotes/`,  {params} );
  }

  update(params) {
    return this.http.patch(`http://${this.ip}/quotes/updateQuote/`, { params });
  }

  retrieve(params) {
    return this.http.get(`http://${this.ip}/quotes/selectQuote/`, { params });
  }

  retrieveAll(params) {
    
    return this.http.get(`http://${this.ip}/quotes/`, {params});
  }
  retrieveAllWithNoID() {
    return this.http.get(`http://${this.ip}/quotes/getAllNoID/`);
  }

  deleteQuote(params) {
    return this.http.delete(`http://${this.ip}/quotes/deleteQuote/`, { params });
  }
}
