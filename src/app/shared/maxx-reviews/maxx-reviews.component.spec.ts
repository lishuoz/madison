import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxxReviewsComponent } from './maxx-reviews.component';

describe('MaxxReviewsComponent', () => {
  let component: MaxxReviewsComponent;
  let fixture: ComponentFixture<MaxxReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxxReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxxReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
