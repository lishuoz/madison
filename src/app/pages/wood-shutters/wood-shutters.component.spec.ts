import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodShuttersComponent } from './wood-shutters.component';

describe('WoodShuttersComponent', () => {
  let component: WoodShuttersComponent;
  let fixture: ComponentFixture<WoodShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WoodShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
