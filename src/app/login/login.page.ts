import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { interval, Subscription } from "rxjs";
import { LoginServiceService } from "../services/login-service.service";
import { Router, NavigationExtras } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  errorString: string;

  constructor(
    private alertController: AlertController,
    private loginService: LoginServiceService,
    private router: Router
  ) {}

  ngOnInit() {}

  ForgotPassword() {
    this.passReset();
  }

  onLoginClick() {
    this.login();
  }

  login() {
    //this.validateCredentials(this.username, this.password);
    const params = {
      username: this.username,
      password: this.password,
    };
    this.loginService.login(params).subscribe(
      (data) => {
        this.username = this.password = "";
        this.loginService.setSession(true);
        this.loginService.setUserInfo(data);
        return data.admin ? this.router.navigate(["tabs/tab3"]) : this.router.navigate(["tabs/tab1"]);
      },
      (err: HttpErrorResponse) => {
          
        this.incorrectCredentialsAlert();
      }
    );
  }

  validateCredentials(username: String, password: String) {
    if(!username || !password) {
      this.incorrectCredentialsAlert();
    }    
  }

  async passReset() {
    const alert = await this.alertController.create({
      header: "Password Reset",
      subHeader: "",
      message:
        "For changing your password you must contact Thomas Braceland or the Administrator",
      buttons: [
        {
          text: "OK",
          handler: () => {
              
          },
        },
      ],
    });
    await alert.present();
  }

  async incorrectCredentialsAlert() {
    const alert = await this.alertController.create({
      header: "Invalid Credentials",
      subHeader: "",
      message:
        "Please try again.",
      buttons: [
        {
          text: "OK",
          handler: () => {
             
          },
        },
      ],
    });
    await alert.present();
  }
}
