import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCaliforniaShuttersComponent } from './blog-california-shutters.component';

describe('BlogCaliforniaShuttersComponent', () => {
  let component: BlogCaliforniaShuttersComponent;
  let fixture: ComponentFixture<BlogCaliforniaShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCaliforniaShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCaliforniaShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
