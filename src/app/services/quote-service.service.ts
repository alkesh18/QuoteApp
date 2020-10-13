import { Injectable } from '@angular/core';
import { Client } from '../interfaces/Client';
import { Service } from "../interfaces/service";

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  serviceData: Service = {
    selectedService: "",
    description: "",
    materialCost: "",
    hoursRequired: "",
    totalCost: 0
  }

  clientData: Client = {
    cName: "",
    cAddress: "",
    cCity: "",
    cEmail: "",
    cPhoneNum: ""
  }

  quoteData: any = {
    clientInfo: {},
    serviceInfo: Array<Service>(),
    total: Number
  }

  constructor() { }

  setServiceObj(newServiceObj: Service){
    this.serviceData = newServiceObj;
  }

  getServiceObj(){
    return this.serviceData;
  }

  setClientObj(newClientObj: Client) {
    this.clientData = newClientObj;
  }

  getClientObj(){
    return this.clientData;
  }

  setQuoteData(newQuoteData: any) {
    this.quoteData = newQuoteData;
  }

  getQuoteData(){
    return this.quoteData;
  }

}
