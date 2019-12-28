import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactHomePage } from './contact-home.page';

const routes: Routes = [
  {
    path: '',
    component: ContactHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactHomePageRoutingModule {}
