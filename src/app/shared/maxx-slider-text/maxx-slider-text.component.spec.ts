import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxxSliderTextComponent } from './maxx-slider-text.component';

describe('MaxxSliderTextComponent', () => {
  let component: MaxxSliderTextComponent;
  let fixture: ComponentFixture<MaxxSliderTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxxSliderTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxxSliderTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
