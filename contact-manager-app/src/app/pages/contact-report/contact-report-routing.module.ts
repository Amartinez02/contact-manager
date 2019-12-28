import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactReportPage } from './contact-report.page';

const routes: Routes = [
  {
    path: '',
    component: ContactReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactReportPageRoutingModule {}
