import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllFranchisees(params) {
    return this.http.get('http://127.0.0.1:8887/users/',  {params} )
  }

  getPrevId() {
    return this.http.get('http://127.0.0.1:8887/users/getPrevId/')
  }

  addFranchisee(params){
    return this.http.post('http://127.0.0.1:8887/users/signup/',  {params} );
  }

  modifyFranchisee(params) {

  }

  viewFranchisees(params) {

  }

  disablePassword(params) {

  }
  
}
