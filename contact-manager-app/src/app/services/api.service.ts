import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact, Dealer, Locality } from '../models/models';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get<Contact[]>(`${environment.API_URL}/contacts`).pipe(
      map((res: any) => {
        let contacts: Contact[] = res.data;
        return contacts;
      })
    )
  }

  async createContact(contact: Contact): Promise<any> {
    let results = await this.http.post(`${environment.API_URL}/contact`, contact).toPromise();
    return results;
  }

  async updateContact(contact: Contact): Promise<any> {
    let results = await this.http.put(`${environment.API_URL}/contact`, contact).toPromise();
    return results;
  }

  async deteleContact(contact_id): Promise<any> {
    let results = await this.http.delete(`${environment.API_URL}/contact/${contact_id}`).toPromise();
    return results;
  }

  getDealers() {
    return this.http.get<Dealer[]>('/assets/data/dealers.json');
  }

  getLocalities() {
    return this.http.get<Locality[]>('/assets/data/localities.json');
  }

}
