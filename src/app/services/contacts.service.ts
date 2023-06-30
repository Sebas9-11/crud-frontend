import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  comments: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  _url = 'https://localhost:7241/contacts';

  constructor(private http: HttpClient) {}

  contactInfo: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
  };

  getContacts() {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    return this.http.get(this._url, { headers: header });
  }

  getContactById(id: number) {
    let header = new HttpHeaders().set('Type-content', 'application/json');

    return this.http.get(this._url + '/' + id, { headers: header });
  }

  addContact(contact: Contact) {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    return this.http.post(this._url, contact, { headers: header });
  }

  updateContact(id: number, contact: Contact) {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    return this.http.put(`${this._url}/${id}`, contact, { headers: header });
  }

  deleteContact(id: number) {
    let header = new HttpHeaders().set('Type-content', 'application/json');
    return this.http.delete(this._url + '/' + id, { headers: header });
  }
}
