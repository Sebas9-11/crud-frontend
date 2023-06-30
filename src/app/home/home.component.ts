import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private contactService: ContactsService) {
    this.contactService.getContacts().subscribe((data) => {
      console.log(data);
    });
  }
}
