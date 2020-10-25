import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isAuthenticated : boolean = false

  constructor() {
    
  }

  getSession(){
    return this.isAuthenticated
  }

  setSession(isAuthenticated : boolean){
    this.isAuthenticated = isAuthenticated

    //this line of code sets the isAuthenticated session to false after 5 seconds. needs to be chnaged to half an hour (we need to discuss this)
    //setTimeout( ()=>{ isAuthenticated = false }, 1800000);
  }

  
  

}
