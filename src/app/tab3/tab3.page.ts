import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}


  addUser() {
    this.router.navigate(['/','add-franchisee']);
  }

  modifyUser() {
    this.router.navigate(['/','modify-franchisee']);
  }

  disableUser() {
    this.router.navigate(['/','disable-franchisee']);
  }

  viewFranchisees() {
    this.router.navigate(['/','view-franchisees']);
  }
  deleteQuote() {
    this.router.navigate(['/','delete-quote']);
  }

}
