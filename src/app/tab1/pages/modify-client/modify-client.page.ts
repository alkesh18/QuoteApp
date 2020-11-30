import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Validator } from 'src/app/common/validator';
import { Client } from 'src/app/interfaces/Client';
import { Operation } from 'src/app/interfaces/operation';
import { NodejsService } from 'src/app/services/nodejs.service';
import { QuoteServiceService } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-modify-client',
  templateUrl: './modify-client.page.html',
  styleUrls: ['./modify-client.page.scss'],
})
export class ModifyClientPage implements OnInit {

  cName: string;
  cAddress: string;
  cCity: string;
  cPhoneNum: string;
  cEmail: string;

  data: any;

  operations: Array<Operation> = [];

  constructor(private alertController: AlertController, private quoteService: QuoteServiceService, private route: ActivatedRoute, private router: Router, private validator: Validator, private Node: NodejsService) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data =
        this.router.getCurrentNavigation().extras.state.sendData;
    }
  }

  ngOnInit() {
    this.loadQuoteData();
  }

  loadQuoteData() {
    this.cName = this.data.client.cName;
    this.cAddress = this.data.client.cAddress;
    this.cCity = this.data.client.cCity;
    this.cPhoneNum = this.data.client.cPhoneNum;
    this.cEmail = this.data.client.cEmail;
  }

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
      this.determineOperations();

      this.updateClientInfo();

      // alert with success message && send info
      this.successAlert();
    } else {
      // fail message
      this.errorAlert();
    }
  }

  determineOperations() {
    if (this.cName.trim() != this.data.client.cName) {
      this.operations.push({
        propName: "client.cName",
        value: this.cName
      });
    }
    if (this.cAddress.trim() != this.data.client.cAddress) {
      this.operations.push({
        propName: "client.cAddress",
        value: this.cAddress
      });
    }
    if (this.cCity.trim() != this.data.client.cCity) {
      this.operations.push({
        propName: "client.cCity",
        value: this.cCity
      });
    }
    if (this.cPhoneNum.trim() != this.data.client.cPhoneNum) {
      this.operations.push({
        propName: "client.cPhoneNum",
        value: this.cPhoneNum
      });
    }
    if (this.cEmail.trim() != this.data.client.cEmail) {
      this.operations.push({
        propName: "client.cEmail",
        value: this.cEmail
      });
    }
  }

  updateClientInfo() {
    const params = {
      quoteId: this.data._id,
      operations: this.operations
    }
    
    this.Node.update(params)
      .subscribe(data => {
        
      },
        (err: HttpErrorResponse) => {
          
        }
      )
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
      message: 'Client was modified successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // send info to next page
            this.router.navigate(['/']);
          }
        }]
    });
    await alert.present();
  }

}
