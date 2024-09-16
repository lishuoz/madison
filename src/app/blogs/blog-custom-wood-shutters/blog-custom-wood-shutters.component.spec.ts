import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCustomWoodShuttersComponent } from './blog-custom-wood-shutters.component';

describe('BlogCustomWoodShuttersComponent', () => {
  let component: BlogCustomWoodShuttersComponent;
  let fixture: ComponentFixture<BlogCustomWoodShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCustomWoodShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCustomWoodShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
