import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNaturalWoodComponent } from './blog-natural-wood.component';

describe('BlogNaturalWoodComponent', () => {
  let component: BlogNaturalWoodComponent;
  let fixture: ComponentFixture<BlogNaturalWoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNaturalWoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNaturalWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
