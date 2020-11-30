import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisableFranchiseePage } from './disable-franchisee.page';

const routes: Routes = [
  {
    path: '',
    component: DisableFranchiseePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisableFranchiseePageRoutingModule {}
