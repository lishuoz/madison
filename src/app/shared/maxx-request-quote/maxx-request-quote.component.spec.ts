import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxxRequestQuoteComponent } from './maxx-request-quote.component';

describe('MaxxRequestQuoteComponent', () => {
  let component: MaxxRequestQuoteComponent;
  let fixture: ComponentFixture<MaxxRequestQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxxRequestQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxxRequestQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
