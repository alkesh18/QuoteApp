import { Component } from '@angular/core';
import {LoginServiceService} from '../app/services/login-service.service'

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  // Creating the variable for assigning the session from LoginService
  // keep in mind if you dont create a variable the session does not read the service on initial load
  isAuthenticated : boolean 



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private loginService : LoginServiceService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      
      this.isAuthenticated = this.loginService.getSession()
      
      if(this.isAuthenticated == false){
        this.router.navigateByUrl('login');
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      } else {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
      
    });
  }
}
