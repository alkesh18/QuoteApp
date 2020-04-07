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
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
