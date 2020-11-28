import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFranchiseesPageRoutingModule } from './view-franchisees-routing.module';

import { ViewFranchiseesPage } from './view-franchisees.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFranchiseesPageRoutingModule
  ],
  declarations: [ViewFranchiseesPage]
})
export class ViewFranchiseesPageModule {}
