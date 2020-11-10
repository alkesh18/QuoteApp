import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NodejsService } from '../services/nodejs.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  QuoteInfo: any;
  selServices: String;

  constructor(private node: NodejsService, private router: Router) {
    this.viewQuoteHistory();
   }

  ngOnInit() {
    this.viewQuoteHistory();
  }

  viewQuoteHistory() {
    this.node.retrieveAll()
    .subscribe((data) => {
        this.QuoteInfo = Object.values(data);
        console.log(this.QuoteInfo);
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
