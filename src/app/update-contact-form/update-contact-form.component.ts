import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-update-contact-form',
  templateUrl: './update-contact-form.component.html',
  styleUrls: ['./update-contact-form.component.css'],
})
export class UpdateContactFormComponent {
  contact = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
  };

  phoneError: string = '';

  @Output() contactUpdated: EventEmitter<void> = new EventEmitter<void>();

  @Input() firstName: string = '';
  @Input() lastName: string = '';
  @Input() phone: string = '';
  @Input() comments: string = '';
  @Input() id: number = 0;

  constructor(private contactsService: ContactsService) {}

  validatePhoneNumber() {
    const phoneNumber = this.contact.phone;
    if (phoneNumber.length > 10) {
      this.phoneError = 'Maximum 10 numbers allowed.';
    } else {
      this.phoneError = '';
    }
  }

  updateContact() {
    this.contact.id = this.id;

    //si la validacion del numero de telefono no pasa, no se actualiza el contacto
    if (this.phoneError !== '') {
      return;
    }

    if (this.contact.firstName.trim() === '') {
      this.contact.firstName = this.firstName;
    }
    if (this.contact.lastName.trim() === '') {
      this.contact.lastName = this.lastName;
    }
    if (this.contact.phone.trim() === '') {
      this.contact.phone = this.phone;
    }
    if (this.contact.comments.trim() === '') {
      this.contact.comments = this.comments;
    }

    console.log(this.contact);
    this.contactsService
      .updateContact(this.contact.id, this.contact)
      .subscribe((data) => {
        console.log(data);
        this.contactUpdated.emit();
      });

    this.contact = {
      id: 0,
      firstName: '',
      lastName: '',
      phone: '',
      comments: '',
    };
  }
}
