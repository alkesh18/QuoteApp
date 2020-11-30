import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-disable-franchisee',
  templateUrl: './disable-franchisee.page.html',
  styleUrls: ['./disable-franchisee.page.scss'],
})
export class DisableFranchiseePage implements OnInit {

  constructor(private adminService: AdminService, private alertCtrl: AlertController, private router: Router, private login: LoginServiceService) { 
    this.currentlyLoggedInUser = this.login.getUser();
    this.getAllFranchisees(this.currentlyLoggedInUser);

  }

  ngOnInit() {
  }

  users: any[];
  selectedUser: any;
  currentlyLoggedInUser: User;

  getAllFranchisees(username) {
    this.adminService.getLogedOutFranchisees(username)
    .subscribe((data) => {
      this.users = Object.values(data);
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

  disableUser(username) {
    this.adminService.disableUser(username)
    .subscribe((data) => {
      console.log("user diabled");
    }, (err: HttpErrorResponse) => {
      console.log(err.message);
    })
  }

  onSubmit(){
    if(this.selectedUser) {
      this.disableUser({username: this.selectedUser});
      this.successAlert();
    } else {
      this.errorAlert();
    }


  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      subHeader: '',
      message: 'Franchisee Added',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // send info to next page
            this.router.navigate(['/tabs/tab3']);
          }
        }]
    });
    await alert.present();
  }

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Entry',
      subHeader: '',
      message: 'Please make sure you enter valid information into all fields.',
      buttons: [
        {
          text: 'OK',
          handler: () => { console.log('Confirm OK!'); }
        }]
    });
    await alert.present();
  }


}
