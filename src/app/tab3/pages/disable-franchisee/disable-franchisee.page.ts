import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-disable-franchisee',
  templateUrl: './disable-franchisee.page.html',
  styleUrls: ['./disable-franchisee.page.scss'],
})
export class DisableFranchiseePage implements OnInit {

  constructor(private adminService: AdminService, private alertCtrl: AlertController, private router: Router) { 
    this.getAllUsers();
    console.log("constructor", this.users)
  }

  users: any;
  selectedUser: any;

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllFranchisees()
    .subscribe((data) => {
      console.log(data);
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
    console.log(this.selectedUser);
    this.disableUser({username: this.selectedUser});

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

  

}
