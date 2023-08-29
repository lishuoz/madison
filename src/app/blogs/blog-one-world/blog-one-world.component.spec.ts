import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOneWorldComponent } from './blog-one-world.component';

describe('BlogOneWorldComponent', () => {
  let component: BlogOneWorldComponent;
  let fixture: ComponentFixture<BlogOneWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOneWorldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOneWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
