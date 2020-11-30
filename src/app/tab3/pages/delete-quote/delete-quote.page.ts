import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NodejsService } from '../../../services/nodejs.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoginServiceService } from '../../../services/login-service.service';
import { User } from '../../../interfaces/user';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-delete-quote',
  templateUrl: './delete-quote.page.html',
  styleUrls: ['./delete-quote.page.scss'],
})
export class DeleteQuotePage implements OnInit {

  QuoteInfo: any;
  selServices: String;

  delete: boolean = false;

  show = false;
  spinner(){
    this.show = true
    setTimeout(() => {
      this.show = false;
    }, 1500 ); 
  }

  spinnerFunction(){
    this.viewQuoteHistory();
    this.spinner();
  }

  
  
  constructor(private alertController: AlertController ,private node: NodejsService, private router: Router, private auth: LoginServiceService, private Node: NodejsService) {
    this.viewQuoteHistory();
   }

  ngOnInit() {
    this.viewQuoteHistory();
  }

  viewQuoteHistory() {    
    this.node.retrieveAllWithNoID()
    .subscribe((data) => {
        this.QuoteInfo = Object.values(data);
        
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }
  deleteOneQuote(data: any){
    
    const params = {
      quoteId: data._id,
    }
    
    this.Node.deleteQuote(params)
      .subscribe(data => {
        
        this.confirmationDelete()
      },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      )
  }

  
  async confirmation() {
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      subHeader: '',
      message: 'Are you sure you want to delete this quote?',
      buttons: [
        {
          
          text: 'OK',
          handler: () => { 
          this.delete = true ;}
          
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.delete = false
          }
        }
      ]
    });
    await alert.present();
  }
  async confirmationDelete() {
    const alert = await this.alertController.create({
      header: 'Confirmation!',
      subHeader: '',
      message: 'Quote Successfuly Deleted',
      buttons: [
        {
          
          text: 'OK',
          handler: () => { console.log('Confirm OK!'); }
          
        }
      ]
    });
    await alert.present();
  }

}
