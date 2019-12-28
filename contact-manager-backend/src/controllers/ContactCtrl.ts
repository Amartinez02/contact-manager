import { Request, Response } from "express";
import ContactService from "../services/ContactService";

export class ContactCtrl {

  public async getContacts(req: Request, res: Response) {
    try {
      console.log(`Consultando listado de Contactos`);
      let result = await ContactService.getContacts();
      res.status(result.code).send({ success: result.success, data: result.data });
    } catch (err) {
      console.log(`Error consultando listado de Contactos: ${err}`);
      res.status(err.code).send({ success: err.success, data: err.data });
    }
  }

  public async createContact(req: Request, res: Response) {
    try {
      console.log(`Creando contacto`);
      let result = await ContactService.createContact(req.body);
      res.status(result.code).send({ success: result.success, data: result.data });
    } catch (err) {
      console.log(`Error creando contacto: ${err}`);
      res.status(err.code).send({ success: err.success, data: err.data });
    }
  }

  public async updateContact(req: Request, res: Response) {
    try {
      console.log(`Actualizando contacto`);
      let result = await ContactService.updateContact(req.body);
      res.status(result.code).send({ success: result.success, data: result.data });
    } catch (err) {
      console.log(`Error actualizando contacto: ${err}`);
      res.status(err.code).send({ success: err.success, data: err.data });
    }
  }

  public async deleteContact(req: Request, res: Response) {
    try {
      console.log(`Eliminando contacto`);
      let result = await ContactService.deleteContact(req.params.contact_id);
      res.status(result.code).send({ success: result.success, data: result.data });
    } catch (err) {
      console.log(`Error eliminando contacto: ${err}`);
      res.status(err.code).send({ success: err.success, data: err.data });
    }
  }

  public async getContactsPDF(req: Request, res: Response) {
    try {
      console.log(`Consultando listado de Contactos`);
      let result = await ContactService.getPDF();
      // res.status(result.code).send({ success: result.success, data: result.data });
    } catch (err) {
      console.log(`Error consultando listado de Contactos: ${err}`);
      res.status(err.code).send({ success: err.success, data: err.data });
    }
  }

}

