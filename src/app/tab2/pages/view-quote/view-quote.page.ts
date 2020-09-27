import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/interfaces/Client';
import { Service } from 'src/app/interfaces/service';
import { QuoteServiceService } from 'src/app/services/quote-service.service';

@Component({
  selector: 'app-view-quote',
  templateUrl: './view-quote.page.html',
  styleUrls: ['./view-quote.page.scss'],
})
export class ViewQuotePage implements OnInit {

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

  total = 0;
  originalTotal = 0;
  wage = 14;
  markup;

  selectedServiceList: Array<Service> = [];

  constructor(private router: Router, private quoteService: QuoteServiceService) { }

  ngOnInit() {
    this.data = this.quoteService.getQuoteData();
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
    let markup = parseInt(this.markup, 10);
    this.total = (this.originalTotal + (this.originalTotal*(markup/100)));
  }

  calcIndServiceTotal(serviceObj: Service): Number {
    let currTotal =  (parseInt(serviceObj.materialCost, 10) + (serviceObj.hoursRequired*this.wage));
    serviceObj.totalCost = currTotal;
    return currTotal;
  }

}
