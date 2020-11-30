import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validator } from 'src/app/common/validator';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Operation } from 'src/app/interfaces/operation';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-modify-franchisee',
  templateUrl: './modify-franchisee.page.html',
  styleUrls: ['./modify-franchisee.page.scss'],
})
export class ModifyFranchiseePage implements OnInit {

  constructor(private adminService: AdminService, private alertController: AlertController, private router: Router, private validator: Validator) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.data =
        this.router.getCurrentNavigation().extras.state.sendData;
    }
  }

  ngOnInit() {
    this.loadFranchiseeData();
  }

  data: any;

  name: string;
  email: string;
  username: string;
  password: string;
  confirm: string;
  admin: string;
  active: string;
  isAdmin: boolean;
  isActive: boolean;

  operations: Array<Operation> = [];

  determineIfAdmin(){
    if(this.admin === "yes") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  determineIfActive(){
    if(this.active === "yes") {
      this.isActive = true;
    } else {
      this.isActive = false;
    }
  }

  determineOperations() {
    if (this.name.trim() != this.data.name) {
      this.operations.push({
        propName: "name",
        value: this.name
      });
    }
    if (this.username.trim() != this.data.username) {
      this.operations.push({
        propName: "username",
        value: this.username
      });
    }
    if (this.isAdmin != this.data.admin) {
      this.operations.push({
        propName: "admin",
        value: this.isAdmin
      });
    }
    if (this.isActive != this.data.active) {
      this.operations.push({
        propName: "active",
        value: this.isActive
      });
    }
    if (this.email.trim() != this.data.email) {
      this.operations.push({
        propName: "email",
        value: this.email
      });
    }
    if(this.password !== "" && this.confirm !== "" && this.password !== null && this.confirm !== null && this.password !== undefined && this.confirm !== undefined){
      if(this.password === this.confirm){
        this.operations.push({
          propName: "password",
          value: this.password
        })
     }
    }

  }

  loadFranchiseeData() {
    this.name = this.data.name;
    this.username = this.data.username;
    this.email = this.data.email;
    this.isAdmin = this.data.admin;
    this.isActive = this.data.active;
  
  }

  // loadAdminRadioButton(){
  //   let yesBtn = document.getElementById("admin-yes");
  //   if(this.isAdmin){
  //     yesBtn. = true;
  //   }
  // }

  updateFranchiseeInfo() {
    const params = {
      userId: this.data._id,
      operations: this.operations
    }
    
    this.adminService.modifyFranchisee(params)
      .subscribe(data => {
        
      },
        (err: HttpErrorResponse) => {
          console.log(err.message)
        }
      )
  }

  onSave() {
    // validate everything
    if (this.validator.validateName(this.name) &&
        this.validator.validateEmail(this.email)) {

      // populate object
      //this.determineIfActive();
      //this.determineIfAdmin();
      this.determineOperations();

      this.updateFranchiseeInfo();

      // alert with success message && send info
      this.successAlert();
    } else {
      // fail message
      this.errorAlert();
    }
  }

  async errorAlert() {
    const alert = await this.alertController.create({
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
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: '',
      message: 'Franchisee was modified successfully.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // send info to next page
            this.router.navigate(['/view-franchisees']);
          }
        }]
    });
    await alert.present();
  }



}
