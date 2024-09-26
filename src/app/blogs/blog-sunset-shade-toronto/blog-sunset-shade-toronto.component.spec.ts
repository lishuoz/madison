import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSunsetShadeTorontoComponent } from './blog-sunset-shade-toronto.component';

describe('BlogSunsetShadeTorontoComponent', () => {
  let component: BlogSunsetShadeTorontoComponent;
  let fixture: ComponentFixture<BlogSunsetShadeTorontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogSunsetShadeTorontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogSunsetShadeTorontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
