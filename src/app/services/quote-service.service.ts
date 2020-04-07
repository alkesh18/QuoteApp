import { Injectable } from '@angular/core';
import { Service } from "../interfaces/service";

@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  serviceData: Service = {
    selectedService: "",
    description: "",
    materialCost: "",
    hoursRequired: ""
  }

  constructor() { }

  setServiceObj(newServiceObj: Service){
    this.serviceData = newServiceObj;
  }

  getServiceObj(){
    return this.serviceData;
  }


}
