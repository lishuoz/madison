import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRollerShadesComponent } from './blog-roller-shades.component';

describe('BlogRollerShadesComponent', () => {
  let component: BlogRollerShadesComponent;
  let fixture: ComponentFixture<BlogRollerShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRollerShadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRollerShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
