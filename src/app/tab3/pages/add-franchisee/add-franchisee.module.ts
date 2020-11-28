import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFranchiseePageRoutingModule } from './add-franchisee-routing.module';

import { AddFranchiseePage } from './add-franchisee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFranchiseePageRoutingModule
  ],
  declarations: [AddFranchiseePage]
})
export class AddFranchiseePageModule {}
