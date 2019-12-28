import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contact-home', pathMatch: 'full' },
  {
    path: 'contact-home',
    loadChildren: () => import('./pages/contact-home/contact-home.module').then( m => m.ContactHomePageModule)
  },
  {
    path: 'contact-detail',
    loadChildren: () => import('./pages/contact-detail/contact-detail.module').then( m => m.ContactDetailPageModule)
  },
  {
    path: 'list-items',
    loadChildren: () => import('./pages/list-items/list-items.module').then( m => m.ListItemsPageModule)
  },
  {
    path: 'contact-report',
    loadChildren: () => import('./pages/contact-report/contact-report.module').then( m => m.ContactReportPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
