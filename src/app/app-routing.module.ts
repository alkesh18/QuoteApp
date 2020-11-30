import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'view-service',
    loadChildren: () => import('./tab2/pages/view-service/view-service.module').then( m => m.ViewServicePageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./tab2/pages/add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'view-quote',
    loadChildren: () => import('./tab2/pages/view-quote/view-quote.module').then( m => m.ViewQuotePageModule)
  },
  {
    path: 'modify-client',
    loadChildren: () => import('./tab1/pages/modify-client/modify-client.module').then( m => m.ModifyClientPageModule)
  },  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-franchisee',
    loadChildren: () => import('./tab3/pages/add-franchisee/add-franchisee.module').then( m => m.AddFranchiseePageModule)
  },
  {
    path: 'modify-franchisee',
    loadChildren: () => import('./tab3/pages/modify-franchisee/modify-franchisee.module').then( m => m.ModifyFranchiseePageModule)
  },
  {
    path: 'view-franchisees',
    loadChildren: () => import('./tab3/pages/view-franchisees/view-franchisees.module').then( m => m.ViewFranchiseesPageModule)
  },
  {
    path: 'disable-franchisee',
    loadChildren: () => import('./tab3/pages/disable-franchisee/disable-franchisee.module').then( m => m.DisableFranchiseePageModule)
  },
  {
    path: 'delete-quote',
    loadChildren: () => import('./tab3/pages/delete-quote/delete-quote.module').then( m => m.DeleteQuotePageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
