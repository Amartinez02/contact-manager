import * as express from 'express';
import { ContactCtrl } from "../controllers/ContactCtrl";

export class AppRoute {

  public ContactCtrl: ContactCtrl = new ContactCtrl();
  public path: string = "/api/contact-manager/";

  public routes(app: express.Application): void {

    app.route(this.path + "contacts").get(this.ContactCtrl.getContacts);
    app.route(this.path + "contact/").post(this.ContactCtrl.createContact);
    app.route(this.path + "contact/").put(this.ContactCtrl.updateContact);
    app.route(this.path + "contact/:contact_id").delete(this.ContactCtrl.deleteContact);
  }

}