import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyFranchiseePageRoutingModule } from './modify-franchisee-routing.module';

import { ModifyFranchiseePage } from './modify-franchisee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyFranchiseePageRoutingModule
  ],
  declarations: [ModifyFranchiseePage]
})
export class ModifyFranchiseePageModule {}
