import ContactRepository from "../repositories/ContactRepository";
import { Contact } from "../entities/Contact";
import { Request } from "express";

class ContactService {

    public async getContacts(): Promise<any> {
        try {
            let result: any = await ContactRepository.findContacts({ active: true});
            return { success: true, code: 200, data: result };
        } catch (err) {
            return { success: false, code: 500, data: err.message };
        }
    }

    public async createContact(contactData: any): Promise<any> {
        try {
            let contact: Contact = new Contact();
            contact.name = contactData.name;
            contact.phone = contactData.phone;
            contact.email = contactData.email;
            contact.address = contactData.address;
            contact.dealer = contactData.dealer;
            contact.locality = contactData.locality;
            contact.active = true;

            await ContactRepository.createContact(contact);
            return { success: true, code: 200, data: { message: "Usuario creado correctamente" } };
        } catch (err) {
            return { success: false, code: 500, data: err.message };
        }
    }

    public async updateContact(contactData: any): Promise<any> {
        try {
            let contact: Contact = await ContactRepository.findContactById(contactData.id);
            contact.name = contactData.name;
            contact.phone = contactData.phone;
            contact.email = contactData.email;
            contact.address = contactData.address;
            contact.dealer = contactData.dealer;
            contact.locality = contactData.locality;

            await ContactRepository.updateContact(contact, contactData.id);
            return { success: true, code: 200, data: { message: "Contacto actualizando correctamente" } };
        } catch (err) {
            return { success: false, code: 500, data: { message: err.message } };
        }
    }

    public async deleteContact(id: any): Promise<any> {
        try {
            let contact: Contact = await ContactRepository.findContactById(id);
            contact.active = false;

            await ContactRepository.updateContact(contact, id);
            return { success: true, code: 200, data: { message: "Contacto actualizando correctamente" } };
        } catch (err) {
            return { success: false, code: 500, data: { message: err.message } };
        }
    }

    async getPDF() {

        var pdf = require('html-pdf');
        var contenido = `<h1>Esto es un test de html-pdf</h1><p>Estoy generando PDF a partir de este código HTML sencillo</p>`;

        let pdfReport = await pdf.create(contenido).toFile('salida.pdf', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });

    }
}

export default new ContactService();
