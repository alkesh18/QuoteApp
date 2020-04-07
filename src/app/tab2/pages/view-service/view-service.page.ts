import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Service } from 'src/app/interfaces/service';
import { Client } from 'src/app/interfaces/Client';
import { QuoteServiceService } from 'src/app/services/quote-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-view-service',
  templateUrl: './view-service.page.html',
  styleUrls: ['./view-service.page.scss'],
})
export class ViewServicePage {
  isShown: boolean = false;

  data: any = {
    clientInfo: {},
    serviceInfo: []
  }

  clientObj: Client = {
    cName: "",
    cAddress: "",
    cCity: "",
    cPhoneNum: "",
    cEmail: ""
  };

  serviceObj: any = null;

  serviceInfoArray: Array<Service> = [];

  constructor(private router: Router, private quoteService: QuoteServiceService, private alertController: AlertController) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.clientObj = this.router.getCurrentNavigation().extras.state.sendData;
    }
  }

  ionViewDidEnter() {
    this.checkIsShown();
    this.serviceObj = this.quoteService.getServiceObj();
    this.serviceInfoArray.push(this.serviceObj);
  }

  checkIsShown() {
    if (this.serviceInfoArray.length > 0) {
      this.isShown = true;
    }
  }

  onSave() {
    this.data.clientInfo = this.clientObj;
    this.data.serviceInfo = this.serviceInfoArray;
    this.successAlert();
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: (this.serviceInfoArray.length-1) +' service(s) were added successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
          }
        }]
    });
    await alert.present();
  }


}
