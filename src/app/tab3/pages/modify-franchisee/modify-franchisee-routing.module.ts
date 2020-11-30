import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifyFranchiseePage } from './modify-franchisee.page';

const routes: Routes = [
  {
    path: '',
    component: ModifyFranchiseePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifyFranchiseePageRoutingModule {}
