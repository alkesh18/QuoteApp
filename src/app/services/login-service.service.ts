import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  user: User;
  isAuthenticated : boolean = false

  ip : string = "127.0.0.1:8887";

  constructor(private http: HttpClient) {  }

  getSession(){
    return this.isAuthenticated
  }

  setSession(isAuthenticated : boolean){
    this.isAuthenticated = isAuthenticated

    //this line of code sets the isAuthenticated session to false after 5 seconds. needs to be chnaged to half an hour (we need to discuss this)
    //setTimeout( ()=>{ isAuthenticated = false }, 1800000);
  }

  public checkAuth() : Boolean {
    let userData = localStorage.getItem('userInfo')
    if(userData && JSON.parse(userData)){
      return true;
    }
    return false;
  }

  public getUserInfo() {
    return localStorage.getItem('userInfo');
  }

  public getUser(){
    return this.user;
  }
  
  public setUserInfo(user){
    localStorage.setItem('userInfo', JSON.stringify(user));
    this.user = user;
  }

  login(params) {
    return this.http.post<any>(`http://${this.ip}/users/login`, {params} );
  }  

}
