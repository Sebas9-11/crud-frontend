import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactTableComponent } from './contact-table/contact-table.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { HomeComponent } from './home/home.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { UpdateContactFormComponent } from './update-contact-form/update-contact-form.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactFormComponent,
    ContactTableComponent,
    DeleteModalComponent,
    ModalContainerComponent,
    UpdateContactFormComponent,
    ModalAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
