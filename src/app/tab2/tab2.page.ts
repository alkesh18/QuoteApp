import { Component } from '@angular/core';
import { Client } from "../interfaces/Client";
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from "@angular/router";

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

  constructor(private alertController: AlertController, private router: Router) { }

  onSave() {
    // validate everything
    if (
      (this.validateName(this.cName)) &&
      (this.validateAddress(this.cAddress)) &&
      (this.validateCity(this.cCity)) &&
      (this.validatePhoneNum(this.cPhoneNum)) &&
      (this.validateEmail(this.cEmail))
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
          handler: () => { console.log('Confirm OK!'); }
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
          }
        }]
    });
    await alert.present();
  }

  validateName(name: string) {
    let result = false;

    if (!!name) {  //It returns false for null,undefined,0,000,"",false.
      name = name.trim();
      let namePattern = /^[a-zA-Z ]+$/;
      result = (namePattern.test(name)) ? true : false;
    }

    return result;
  }

  validateAddress(address: string) {
    let result = false;

    if (!!address) {
      address = address.trim();
      let addressPatern = /^[a-zA-Z0-9 ]*$/;
      result = (addressPatern.test(address)) ? true : false;
    }

    return result;
  }

  validateCity(city: string) {
    let result = false;

    if (!!city) {
      city = city.trim();
      let cityPattern = /^[a-zA-Z ]+$/;
      result = (cityPattern.test(city)) ? true : false;
    }

    return result;
  }

  validatePhoneNum(phoneNum: string) {
    let result = false;

    if (!!phoneNum) {
      phoneNum = phoneNum.trim();
      let phoneNumPattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      result = (phoneNumPattern.test(phoneNum)) ? true : false;
    }

    return result;
  }

  validateEmail(email: string) {
    let result = false;

    if (!!email) {
      email = email.trim();
      let emailPattern = /\S+@\S+\.\S+/;
      result = (emailPattern.test(email)) ? true : false;
    }

    return result;
  }
}
