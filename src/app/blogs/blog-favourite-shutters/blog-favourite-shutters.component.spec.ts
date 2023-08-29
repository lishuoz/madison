import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFavouriteShuttersComponent } from './blog-favourite-shutters.component';

describe('BlogFavouriteShuttersComponent', () => {
  let component: BlogFavouriteShuttersComponent;
  let fixture: ComponentFixture<BlogFavouriteShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFavouriteShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogFavouriteShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
