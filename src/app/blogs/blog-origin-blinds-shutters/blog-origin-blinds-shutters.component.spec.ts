import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOriginBlindsShuttersComponent } from './blog-origin-blinds-shutters.component';

describe('BlogOriginBlindsShuttersComponent', () => {
  let component: BlogOriginBlindsShuttersComponent;
  let fixture: ComponentFixture<BlogOriginBlindsShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOriginBlindsShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOriginBlindsShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
