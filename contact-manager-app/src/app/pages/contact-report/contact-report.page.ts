import { Component, OnInit } from '@angular/core';
import { Contact, Locality } from 'src/app/models/models';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { PDFGenerator } from 'src/app/helpers/PDFGenerator';
import { ModalController } from '@ionic/angular';
import { ListItemsPage } from '../list-items/list-items.page';
import { LocalityHelper } from 'src/app/helpers/LocalityHelper';
import { ToastHelper } from 'src/app/helpers/ToastHelper';
import  * as sortJsonArray from 'sort-json-array';

@Component({
  selector: 'app-contact-report',
  templateUrl: './contact-report.page.html',
  styleUrls: ['./contact-report.page.scss'],
})
export class ContactReportPage {

  private contacts: Contact[];
  private localities: Locality[];
  availableContact = true;
  dealer: string = "";
  locality: number = 0;
  dealerLocality: string = "";

  constructor(
    private apiService: ApiService,
    private pdf: PDFGenerator,
    private toastHelper: ToastHelper,
    private modalController: ModalController,
    private localityHelper: LocalityHelper) { }

  async ionViewWillEnter() {
    try {
      this.contacts = await this.apiService.getContacts().toPromise();
      this.localities = await this.apiService.getLocalities().toPromise();

      this.contacts = sortJsonArray(this.contacts, 'name', 'asc');
      this.localities = sortJsonArray(this.localities, 'name', 'asc');

    } catch (error) {
    }
  }

  downloadPDF() {

    if(this.contacts.filter((c) => {return (c.dealer === this.dealer && c.locality === this.locality)}).length === 0){
      this.toastHelper.presentToast("No existen contactos para exportar");
      return false;
    }

    let data: string [] = [];

    data.push("Contactos: " + this.dealerLocality)
    data.push(" ")

    this.contacts.forEach(c => {
      
      if(c.dealer === this.dealer && c.locality === this.locality){
        data.push(` • ${c.name}  (${c.phone} - ${c.email})`)
      }

    });

    if(this.contacts.length === 0){
      this.toastHelper.presentToast("No existen contactos para exportar");
      return false;
    }

    this.pdf.generatePDF(data);
  }

  async listDealer() {
    const modal = await this.modalController.create({
      component: ListItemsPage,
      componentProps: {
        dataParam: ""
      }
    });

    await modal.present();

    let resultData: any = await modal.onDidDismiss();

    if (resultData.data) {
      this.dealer = resultData.data.name;
      this.locality = resultData.data.locality_id;
      this.dealerLocality = `${this.dealer} / ${this.getLocalityName(this.locality)}`;
    }
  }

  public getLocalityName(localityId: number) {
    return this.localityHelper.getName(localityId, this.localities);
  }

  
  

}
