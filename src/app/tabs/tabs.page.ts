import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  user: any;
  isAdmin: Boolean = false;

  constructor(private auth: LoginServiceService, private router: Router ) {
    this.verifyAdmin();
  }

  ngOnInit() {
    this.verifyAdmin();
  }

  verifyAdmin() {
    this.user = this.auth.getUser();
    if(this.user.admin) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  logoff() {
    this.auth.setSession(false);
    this.auth.setUserInfo(null);
    this.router.navigate(['login']);
  }

}
