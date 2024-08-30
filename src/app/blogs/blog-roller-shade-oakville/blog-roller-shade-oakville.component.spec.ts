import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRollerShadeOakvilleComponent } from './blog-roller-shade-oakville.component';

describe('BlogRollerShadeOakvilleComponent', () => {
  let component: BlogRollerShadeOakvilleComponent;
  let fixture: ComponentFixture<BlogRollerShadeOakvilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogRollerShadeOakvilleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogRollerShadeOakvilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
