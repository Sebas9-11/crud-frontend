import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactFormComponent } from './update-contact-form.component';

describe('UpdateContactFormComponent', () => {
  let component: UpdateContactFormComponent;
  let fixture: ComponentFixture<UpdateContactFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContactFormComponent]
    });
    fixture = TestBed.createComponent(UpdateContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
