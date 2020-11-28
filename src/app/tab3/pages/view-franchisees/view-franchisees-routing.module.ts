import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFranchiseesPage } from './view-franchisees.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFranchiseesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFranchiseesPageRoutingModule {}
