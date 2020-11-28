import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisableFranchiseePageRoutingModule } from './disable-franchisee-routing.module';

import { DisableFranchiseePage } from './disable-franchisee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisableFranchiseePageRoutingModule
  ],
  declarations: [DisableFranchiseePage]
})
export class DisableFranchiseePageModule {}
