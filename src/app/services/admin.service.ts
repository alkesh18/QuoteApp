import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  ip : string = "127.0.0.1:8887";

  getAllFranchisees() {
    return this.http.get(`http://${this.ip}/users/` )
  }

  getLogedOutFranchisees(params) {
    return this.http.post(`http://${this.ip}/users/getOtherUsers/`, {params} )
  }

  getPrevId() {
    return this.http.get(`http://${this.ip}/users/getPrevId/`)
  }

  addFranchisee(params){
    return this.http.post(`http://${this.ip}/users/signup/`,  {params} );
  }

  modifyFranchisee(params) {
    return this.http.patch(`http://${this.ip}/users/updateUser/`,  {params} );
  }

  disableUser(params) {
    return this.http.patch(`http://${this.ip}/users/disableUser/`,  {params} );
  }
  
}
