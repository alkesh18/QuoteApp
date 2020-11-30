import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NodejsService } from '../services/nodejs.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { User } from '../interfaces/user';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  QuoteInfo: any;
  selServices: String;
  user: User;

  show = false;
  spinner(){
    this.show = true
    setTimeout(() => {
      this.show = false;
    }, 1500 ); 
  }

  spinnerFunction(data: any){
    this.viewQuoteHistory(data);
    this.spinner();
  }

  constructor(private node: NodejsService, private router: Router, private auth: LoginServiceService) {
    this.user = JSON.parse(this.auth.getUserInfo());
    
    this.viewQuoteHistory(this.user);
   }

  ngOnInit() {
    this.user = JSON.parse(this.auth.getUserInfo());
    
    this.viewQuoteHistory(this.user);
  }

  viewQuoteHistory(user) {
    
    
    const params = {franchiseeId: user.franchiseeId}
    this.node.retrieveAll(params)
    .subscribe((data) => {
        this.QuoteInfo = Object.values(data);
      
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

   selectQuoteToEdit(data: any) {
    const naviExtras: NavigationExtras = { state: { sendData: data } };
    this.router.navigate(['modify-client'], naviExtras);
  }


  

}



