import { getManager, createConnection, UpdateResult, DeleteResult, ObjectID } from "typeorm";
import { Contact } from "../entities/Contact";

class ContactRepository {

    constructor() {
        createConnection().then((conn) => {
            console.log("Database Connection is open");
        }).catch((err) => {
            console.log(`Error in connection: ${err}`)
        })
    }

    public async findContacts(filter: any): Promise<Contact[]> {
        let result = await getManager().getRepository(Contact).find(filter);
        return result;
    }

    public async findContactById(id: any): Promise<Contact> {
        return await getManager().getRepository(Contact).findOne(id);
    }

    public async createContact(contact: Contact): Promise<Contact> {
        return getManager().getRepository(Contact).save(contact);
    }

    public async updateContact(contact: Contact, id: any): Promise<UpdateResult> {
        return getManager().getRepository(Contact).update(id, contact);
    }

    public async deleteContact(id: any): Promise<DeleteResult> {
        return await getManager().getRepository(Contact).delete(id)

    }
}

export default new ContactRepository();
