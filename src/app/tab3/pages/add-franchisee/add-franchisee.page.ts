import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Validator } from 'src/app/common/validator';
import { AdminService } from 'src/app/services/admin.service';
import { first, take } from 'rxjs/operators';

@Component({
  selector: 'app-add-franchisee',
  templateUrl: './add-franchisee.page.html',
  styleUrls: ['./add-franchisee.page.scss'],
})
export class AddFranchiseePage implements OnInit {

  constructor(private adminService: AdminService, private validator: Validator, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.getFranchiseeId();
  }

  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isAdmin: any;
  admin: Boolean;
  active = true;
  oldFranchiseeId: any;
  franchiseeId: any;

  onSubmit() {
    if(this.validator.validateName(this.name) &&
      this.validator.validateEmail(this.email) &&
      (this.username.trim() !== "" || null) &&
      (this.password.trim() !== "" || null) &&
      (this.confirmPassword.trim() !== "" || null) &&
      (this.password === this.confirmPassword) &&
      (this.isAdmin.trim() !== "" || null)) 
      {
        if(this.isAdmin === "yes") {
          this.admin = true;
        } else {
          this.admin = false
        }

        this.createFranchisee();
        this.successAlert();
      } else {
        this.errorAlert();
      }
  }

  getFranchiseeId() {
    this.adminService.getPrevId()
    .subscribe((data) => {
        this.oldFranchiseeId = data;
        this.generateFranchiseeId();
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

  generateFranchiseeId() {
    this.franchiseeId = this.oldFranchiseeId.franchiseeId;
    this.franchiseeId++;
  }

  createFranchisee(){
    const params = {
      username: this.username,
      password: this.password,
      name: this.name,
      email: this.email,
      admin: this.admin,
      active: true,
      franchiseeId: this.franchiseeId
    }

    

    this.adminService.addFranchisee(params).pipe(first())
    .subscribe((data) => {
        
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

  async errorAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Invalid Entry',
      subHeader: '',
      message: 'Please make sure you enter valid information into all fields.',
      buttons: [
        {
          text: 'OK',
          handler: () => {  }
        }]
    });
    await alert.present();
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
