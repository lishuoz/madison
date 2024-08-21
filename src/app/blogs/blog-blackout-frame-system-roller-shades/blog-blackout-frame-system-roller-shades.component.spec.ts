import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogBlackoutFrameSystemRollerShadesComponent } from './blog-blackout-frame-system-roller-shades.component';

describe('BlogBlackoutFrameSystemRollerShadesComponent', () => {
  let component: BlogBlackoutFrameSystemRollerShadesComponent;
  let fixture: ComponentFixture<BlogBlackoutFrameSystemRollerShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogBlackoutFrameSystemRollerShadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogBlackoutFrameSystemRollerShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
