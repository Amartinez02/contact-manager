import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, Dealer, Locality } from 'src/app/models/models';
import { ApiService } from 'src/app/services/api.service';
import { ToastController, ModalController } from '@ionic/angular';
import { Location } from '@angular/common';
import { ListItemsPage } from '../list-items/list-items.page';
import { LocalityHelper } from 'src/app/helpers/LocalityHelper';
import { ToastHelper } from 'src/app/helpers/ToastHelper';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage {

  contact: Contact = { id: "", name: "", phone: "", email: "", address: "", dealer: "", locality: 0 };
  readonlyInput: boolean = false;
  dealer: string = "";
  btnText: string = "Guardar";
  private localities: Locality[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private localityHelper: LocalityHelper,
    private location: Location,
    private toastHelper: ToastHelper,
    private modalController: ModalController,
    private toastController: ToastController) {
    this.route.queryParams.subscribe(async params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.contact = this.router.getCurrentNavigation().extras.state.contact;
        this.readonlyInput = true;
        this.btnText = "Editar";
      }
    });

    this.loadLocalities();
  }

  async loadLocalities() {
    this.localities = await this.apiService.getLocalities().toPromise();
    this.dealer = (this.contact.locality) ? `${this.contact.dealer} / ${this.getLocalityName(this.contact.locality)}` : "";

  }

  async btnClick() {
    if (this.btnText === "Editar") {
      this.readonlyInput = false;
      this.btnText = "Guardar";
    } else {

      if (this.validateFields()) {
        if (this.contact.id)
          await this.editContact();
        else
          await this.saveContact();
      }
    }
  }

  async saveContact() {
    try {
      let result = await this.apiService.createContact(this.contact);

      if (!result.success) {
        this.toastHelper.presentToast("Ocurrio un error al momento de crear el contacto");

      } else {
        this.toastHelper.presentToast("Contacto creado correctamente");
        this.readonlyInput = true;
        this.btnText = "Editar";
      }

    } catch (error) {
      this.toastHelper.presentToast("Ocurrio un error al momento de crear el contacto");
    }
  }

  async editContact() {
    try {
      let result = await this.apiService.updateContact(this.contact);

      if (!result.success) {
        this.toastHelper.presentToast("Ocurrio un error al momento de actualizar el contacto");
      } else {
        this.toastHelper.presentToast("Contacto actualizado correctamente");
        this.readonlyInput = true;
        this.btnText = "Editar";
      }

    } catch (error) {
      this.toastHelper.presentToast("Ocurrio un error al momento de actualizar el contacto");
    }
  }

  async deleteContact() {
    try {
      let result = await this.apiService.deteleContact(this.contact.id);

      if (!result.success) {
        this.toastHelper.presentToast("Ocurrio un error al momento de eliminar el contacto");
      } else {
        this.toastHelper.presentToast("Contacto eliminado correctamente");
        this.location.back();
      }

    } catch (error) {
      this.toastHelper.presentToast("Ocurrio un error al momento de eliminar el contacto");
    }
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
      this.contact.dealer = resultData.data.name;
      this.contact.locality = resultData.data.locality_id;
      this.dealer = `${this.contact.dealer} / ${this.getLocalityName(this.contact.locality)}`;
    }

  }

  public getLocalityName(localityId: number) {
    return this.localityHelper.getName(localityId, this.localities);
  }

  validateFields() {
    if (!this.contact.name.trim()) {
      this.toastHelper.presentToast("El campo Nombre es requerido");
      return false;
    } else if (!this.contact.phone.trim()) {
      this.toastHelper.presentToast("El campo Teléfono es requerido");
      return false;
    } else if (!this.contact.dealer.trim()) {
      this.toastHelper.presentToast("El campo Dealer es requerido");
      return false;
    }
    return true;
  }

}
