import { Component, OnInit } from '@angular/core';
import { Contact, Locality } from 'src/app/models/models';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PDFGenerator } from 'src/app/helpers/PDFGenerator';
import { LocalityHelper } from 'src/app/helpers/LocalityHelper';
import  * as sortJsonArray from 'sort-json-array';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.page.html',
  styleUrls: ['./contact-home.page.scss'],
})
export class ContactHomePage {

  private contacts: Contact[];
  private localities:Locality[];
  searchText: string = "";
  availableContact = true;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private localityHelper: LocalityHelper,
    private toastController: ToastController,
    private PDFGenerator: PDFGenerator) { }

  async ionViewWillEnter() {
    try {
      this.contacts = await this.apiService.getContacts().toPromise();
      this.availableContact = (this.contacts.length > 0) ? true : false;
      this.localities = await this.apiService.getLocalities().toPromise();
      this.searchText = "";
      this.contacts = sortJsonArray(this.contacts, 'name', 'asc');
    } catch (error) {
      this.presentToast("Hubo un error al momento de establacer la conexión")
    }
  }

  contactDetail(contact: Contact) {
    let navigationExtras: NavigationExtras = { state: { contact: contact } };
    this.router.navigate(['/contact-detail'], navigationExtras);
  }

  doRefresh(event) {  
    setTimeout(async () => {  
      await this.ionViewWillEnter();
      event.target.complete();  
    }, 2000);  
  }  

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  public getLocalityName(localityId: number){
    return this.localityHelper.getName(localityId, this.localities);
  }


}
