import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-view-franchisees',
  templateUrl: './view-franchisees.page.html',
  styleUrls: ['./view-franchisees.page.scss'],
})
export class ViewFranchiseesPage implements OnInit {
  show = false;

  constructor(private adminService: AdminService, private router: Router) { 
    
  }

  ngOnInit() {
    this.getAllFranchisees();
  }

  franchisees: User[];

  getAllFranchisees() {
    this.adminService.getAllFranchisees()
    .subscribe((data) => {
      this.franchisees = Object.values(data);
      },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
      )
  }

  selectFranchiseeToEdit(data: any) {
    
    const naviExtras: NavigationExtras = { state: { sendData: data } };
    this.router.navigate(['modify-franchisee'], naviExtras);
  }

  spinner(){
    this.show = true
    setTimeout(() => {
      this.show = false;
    }, 1500 ); 
  }

  spinnerFunction(){
    this.getAllFranchisees();
    this.spinner();
  }

}
