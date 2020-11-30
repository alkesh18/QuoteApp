import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFranchiseePage } from './add-franchisee.page';

const routes: Routes = [
  {
    path: '',
    component: AddFranchiseePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFranchiseePageRoutingModule {}
