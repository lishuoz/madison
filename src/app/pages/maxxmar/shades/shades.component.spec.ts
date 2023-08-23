import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadesComponent } from './shades.component';

describe('ShadesComponent', () => {
  let component: ShadesComponent;
  let fixture: ComponentFixture<ShadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
