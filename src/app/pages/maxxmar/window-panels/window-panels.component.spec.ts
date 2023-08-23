import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPanelsComponent } from './window-panels.component';

describe('WindowPanelsComponent', () => {
  let component: WindowPanelsComponent;
  let fixture: ComponentFixture<WindowPanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowPanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowPanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
