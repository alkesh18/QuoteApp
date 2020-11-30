import { Component } from '@angular/core';
import { Client } from "../interfaces/Client";
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";
import { Validator } from "../common/validator";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  // declare vars
  cName: string;
  cAddress: string;
  cCity: string;
  cPhoneNum: string;
  cEmail: string;

  clientObj: Client = {
    cName: "",
    cAddress: "",
    cCity: "",
    cPhoneNum: "",
    cEmail: ""
  };

  constructor(private alertController: AlertController, private router: Router, private validator: Validator) { }

  onSave() {
    // validate everything
    if (
      (this.validator.validateName(this.cName)) &&
      (this.validator.validateAddress(this.cAddress)) &&
      (this.validator.validateCity(this.cCity)) &&
      (this.validator.validatePhoneNum(this.cPhoneNum)) &&
      (this.validator.validateEmail(this.cEmail))
    ) {

      // populate object
      this.clientObj = {
        cName: this.cName.trim(),
        cAddress: this.cAddress.trim(),
        cCity: this.cCity.trim(),
        cPhoneNum: this.cPhoneNum.trim(),
        cEmail: this.cEmail.trim()
      }
      // alert with success message && send info
      this.successAlert();
    } else {
      // fail message
      this.errorAlert();
    }
  }

  sendInfo(data: any) {
    const naviExtras: NavigationExtras = { state: { sendData: data } };
    this.router.navigate(['view-service'], naviExtras);
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Entry',
      subHeader: '',
      message: 'Please make sure you enter valid information into all fields.',
      buttons: [
        {
          text: 'OK',
          handler: () => {  }
        }]
    });
    await alert.present();
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: 'Client ' + this.clientObj.cName + ' was added successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // send info to next page
            this.sendInfo(this.clientObj);
            this.cName = ""
            this.cAddress = ""
            this.cEmail = ""
            this.cPhoneNum = ""
            this.cCity = ""
          }
        }]
    });
    await alert.present();
  }
}
