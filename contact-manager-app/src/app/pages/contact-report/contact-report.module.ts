import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactReportPageRoutingModule } from './contact-report-routing.module';

import { ContactReportPage } from './contact-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactReportPageRoutingModule
  ],
  declarations: [ContactReportPage]
})
export class ContactReportPageModule {}
