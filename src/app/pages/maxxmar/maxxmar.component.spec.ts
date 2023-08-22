import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxxmarComponent } from './maxxmar.component';

describe('MaxxmarComponent', () => {
  let component: MaxxmarComponent;
  let fixture: ComponentFixture<MaxxmarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxxmarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxxmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
