import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interfaces/service';
import { Router, NavigationExtras } from '@angular/router';
import { QuoteServiceService } from 'src/app/services/quote-service.service';
import { AlertController } from '@ionic/angular';
import { Validator } from "../../../common/validator";

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.page.html',
  styleUrls: ['./add-service.page.scss'],
})
export class AddServicePage implements OnInit {
  
  // declatre vars
  serviceSelection: any;
  description: any;
  materialCost: any;
  hoursRequired: any;
  
  serviceObj = {
    selectedService: "",
    description: "",
    materialCost: "",
    hoursRequired: "",
    totalCost: 0
  }  

  constructor(private router: Router, private quoteService: QuoteServiceService, private alertController: AlertController, private validator: Validator) { }

  ngOnInit() {
  }

  onSubmit() {
    // validate before moving on
    if(this.validator.validateNumber(this.materialCost) && this.validator.validateNumber(this.hoursRequired)){
      this.serviceObj = {
        selectedService: this.serviceSelection,
        description: this.description.trim(),
        materialCost: this.materialCost.trim(),
        hoursRequired: this.hoursRequired.trim(),
        totalCost: 0
      }  
      this.quoteService.setServiceObj(this.serviceObj);
      this.successAlert();
    } else {
      this.errorAlert();
    }    
  };

  sendInfo() {
    this.router.navigate(['view-service']);
  }

  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: 'Service ' + this.serviceObj.selectedService + ' - '+ this.serviceObj.description + ' was added successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // send info to next page
            this.sendInfo();
          }
        }]
    });
    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertController.create({
      header: 'Invalid Entry',
      subHeader: '',
      message: 'Please make sure you enter valid numbers for material cost and hours required.',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('Confirm OK!'); }
        }]
    });
    await alert.present();
  }
}
