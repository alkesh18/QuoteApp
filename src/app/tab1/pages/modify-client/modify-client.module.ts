import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifyClientPageRoutingModule } from './modify-client-routing.module';

import { ModifyClientPage } from './modify-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifyClientPageRoutingModule
  ],
  declarations: [ModifyClientPage]
})
export class ModifyClientPageModule {}
