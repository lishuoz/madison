import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOakvilleShuttersComponent } from './blog-oakville-shutters.component';

describe('BlogOakvilleShuttersComponent', () => {
  let component: BlogOakvilleShuttersComponent;
  let fixture: ComponentFixture<BlogOakvilleShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOakvilleShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOakvilleShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
