import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMapContainerComponent } from './contact-map-container.component';

describe('ContactMapContainerComponent', () => {
  let component: ContactMapContainerComponent;
  let fixture: ComponentFixture<ContactMapContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactMapContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMapContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
