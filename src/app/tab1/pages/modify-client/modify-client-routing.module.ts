import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyClientPage } from './modify-client.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyClientPageRoutingModule {}
