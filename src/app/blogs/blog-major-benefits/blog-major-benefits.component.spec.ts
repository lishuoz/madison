import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMajorBenefitsComponent } from './blog-major-benefits.component';

describe('BlogMajorBenefitsComponent', () => {
  let component: BlogMajorBenefitsComponent;
  let fixture: ComponentFixture<BlogMajorBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogMajorBenefitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMajorBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
