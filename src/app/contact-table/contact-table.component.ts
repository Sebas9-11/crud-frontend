import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-table',
  templateUrl: './contact-table.component.html',
  styleUrls: ['./contact-table.component.css'],
})
export class ContactTableComponent {
  @ViewChild('myInput') myInput!: ElementRef<HTMLInputElement>;
  data: any = [];

  showConfirmationDialog: boolean = false;
  contactToDeleteId: number = 0;
  contactId: number = 0;

  contactUpdate: any = {
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
  };
  contact = {
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
  };

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.getContacts();
  }

  refreshTable() {
    this.getContacts();
  }

  getContacts() {
    this.contactsService.getContacts().subscribe((data) => {
      console.log(data);
      this.data = data;
    });
  }

  deleteContact(contactId: number) {
    this.showConfirmationDialog = true;
    this.contactToDeleteId = contactId;
  }

  confirmDeleteContact() {
    if (this.contactToDeleteId !== null) {
      this.contactsService
        .deleteContact(this.contactToDeleteId)
        .subscribe(() => {
          this.data = this.data.filter(
            (contact: any) => contact.id !== this.contactToDeleteId
          );
          this.contactToDeleteId = 0;
          this.showConfirmationDialog = false;
        });
    }
  }

  cancelDeleteContact() {
    this.contactToDeleteId = 0;
    this.showConfirmationDialog = false;
  }

  openEditModal(contactId: number) {
    this.contactId = contactId;
    this.contactsService.getContactById(contactId).subscribe((data) => {
      console.log(data);
      this.contactUpdate = data;
      console.log(this.contactUpdate);
    });
  }
}
