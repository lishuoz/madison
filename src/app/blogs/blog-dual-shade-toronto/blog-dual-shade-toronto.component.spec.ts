import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDualShadeTorontoComponent } from './blog-dual-shade-toronto.component';

describe('BlogDualShadeTorontoComponent', () => {
  let component: BlogDualShadeTorontoComponent;
  let fixture: ComponentFixture<BlogDualShadeTorontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDualShadeTorontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDualShadeTorontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
