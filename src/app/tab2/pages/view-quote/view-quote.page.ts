import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Validator } from 'src/app/common/validator';
import { Client } from 'src/app/interfaces/Client';
import { Service } from 'src/app/interfaces/service';
import { LoginServiceService } from 'src/app/services/login-service.service';
import { NodejsService } from 'src/app/services/nodejs.service';
import { QuoteServiceService } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.page.html',
  styleUrls: ['./view-quote.page.scss'],
})
export class ViewQuotePage implements OnInit {

  data: any = {
    clientInfo: {},
    serviceInfo: [],
    total: Number,
    franchiseeId: Number
  }

  franchiseeId=0;

  clientObj: Client = {
    cName: "",
    cAddress: "",
    cCity: "",
    cPhoneNum: "",
    cEmail: ""
  };
  
  user: any;

  total = 0;
  originalTotal = 0;
  wage = 14;
  markup;

  selectedServiceList: Array<Service> = [];

  constructor(private router: Router, private quoteService: QuoteServiceService, private validate: Validator, 
    private alertController: AlertController, private Node: NodejsService, private auth: LoginServiceService) { }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUserInfo());
    this.data = this.quoteService.getQuoteData();
    
    this.franchiseeId = this.user.franchiseeId;
    this.data.franchiseeId = this.franchiseeId;
    
    this.quoteService.setQuoteData(this.data);
    this.clientObj = this.data.clientInfo;
    this.selectedServiceList = this.data.serviceInfo;
    this.calcPreMarkupTotal();
  }

  calcPreMarkupTotal() {
    this.selectedServiceList.forEach(element => {
      element.totalCost = this.calcIndServiceTotal(element);
      this.originalTotal += element.totalCost;
      this.total += element.totalCost;
    });
  }

  calcTotalWithMarkup() {
    if (this.validate.validateNumber(this.markup)) {
      let markup = parseInt(this.markup, 10);
      this.total = (this.originalTotal + (this.originalTotal * (markup / 100)));
      this.data.total = this.total;
      
      this.quoteService.setQuoteData(this.data);
    } else {
      this.markup = "";
      this.errorAlert();
    }
  }

  calcIndServiceTotal(serviceObj: Service): Number {
    let currTotal = (parseInt(serviceObj.materialCost, 10) + (serviceObj.hoursRequired * this.wage));
    serviceObj.totalCost = currTotal;
    return currTotal;
  }

  saveQuoteData() {
    const params = this.quoteService.getQuoteData();
    
    this.Node.insert(params)
      .subscribe(data => {
        
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Entry',
      subHeader: '',
      message: 'Please make sure to enter a valid markup value.',
      buttons: [
        {
          text: 'OK',
          handler: () => { }
        }]
    });
    await alert.present();
  }

}
