import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactHomePageRoutingModule } from './contact-home-routing.module';

import { ContactHomePage } from './contact-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactHomePageRoutingModule
  ],
  declarations: [ContactHomePage]
})
export class ContactHomePageModule {}
