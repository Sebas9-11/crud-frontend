import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  @Input() titleBtn: string = '';
  @Output() contactAdded: EventEmitter<void> = new EventEmitter<void>();
  @Output() alert = new EventEmitter<string>();

  contact = {
    firstName: '',
    lastName: '',
    phone: '',
    comments: '',
  };

  phoneError: string = '';

  constructor(private contactsService: ContactsService) {}

  validatePhoneNumber() {
    const phoneNumber = this.contact.phone;
    if (phoneNumber.length > 10) {
      this.phoneError = 'Maximum 10 numbers allowed.';
    } else {
      this.phoneError = '';
    }
  }

  onSubmit() {
    if (
      this.contact.firstName === '' ||
      this.contact.lastName === '' ||
      this.contact.phone === ''
    ) {
      alert('Please fill in all fields');
      return;
    }

    this.contactsService.addContact(this.contact).subscribe(
      (res) => {
        console.log(res);
        this.contactAdded.emit();
      },
      (err) => {
        console.log(err);
      }
    );
    this.contact = {
      firstName: '',
      lastName: '',
      phone: '',
      comments: '',
    };
  }
}
