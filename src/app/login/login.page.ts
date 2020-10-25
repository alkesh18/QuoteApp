import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { interval, Subscription} from 'rxjs';
import { LoginServiceService } from '../services/login-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  constructor(private alertController: AlertController, private loginService : LoginServiceService, private router : Router) { }

  ngOnInit() {
  }

  ForgotPassword(){
    this.passReset()
  }
  onLoginClick(){
    this.loginService.setSession(true)
    console.log(this.loginService.getSession())
    this.router.navigate(['tabs/tab1']);
  }

  async passReset() {
    const alert = await this.alertController.create({
      header: 'Password Reset',
      subHeader: '',
      message: 'For changing your password you must contact Thomas Braceland or the Administrator',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('Confirm OK!'); }
        }]
    });
    await alert.present();
  }

}
