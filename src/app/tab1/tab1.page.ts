import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NodejsService } from '../services/nodejs.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  QuoteInfo: any;
  selServices: String;

  constructor(private node: NodejsService) { }

  ngOnInit(){
    this.viewQuoteHistory();
  }

  viewQuoteHistory() {
    this.node.retrieveAll()
      .subscribe(data => {
        this.QuoteInfo = data;
        console.log(this.QuoteInfo);
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);          
        }
      )
  }

}
