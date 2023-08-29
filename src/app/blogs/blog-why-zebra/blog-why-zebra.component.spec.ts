import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWhyZebraComponent } from './blog-why-zebra.component';

describe('BlogWhyZebraComponent', () => {
  let component: BlogWhyZebraComponent;
  let fixture: ComponentFixture<BlogWhyZebraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogWhyZebraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogWhyZebraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
