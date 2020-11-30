import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getAllFranchisees() {
    return this.http.get('http://127.0.0.1:8887/users/' )
  }

  getLogedOutFranchisees(params) {
    return this.http.post('http://127.0.0.1:8887/users/getOtherUsers/', {params} )
  }

  getPrevId() {
    return this.http.get('http://127.0.0.1:8887/users/getPrevId/')
  }

  addFranchisee(params){
    return this.http.post('http://127.0.0.1:8887/users/signup/',  {params} );
  }

  modifyFranchisee(params) {
    return this.http.patch('http://127.0.0.1:8887/users/updateUser/',  {params} );
  }

  viewFranchisees(params) {

  }

  disableUser(params) {
    return this.http.patch('http://127.0.0.1:8887/users/disableUser/',  {params} );
  }
  
}
