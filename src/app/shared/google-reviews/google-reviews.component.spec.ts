import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleReviewsComponent } from './google-reviews.component';

describe('GoogleReviewsComponent', () => {
  let component: GoogleReviewsComponent;
  let fixture: ComponentFixture<GoogleReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
