import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCellularShadeTorontoComponent } from './blog-cellular-shade-toronto.component';

describe('BlogCellularShadeTorontoComponent', () => {
  let component: BlogCellularShadeTorontoComponent;
  let fixture: ComponentFixture<BlogCellularShadeTorontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCellularShadeTorontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCellularShadeTorontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
