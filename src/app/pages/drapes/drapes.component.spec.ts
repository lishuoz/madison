import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrapesComponent } from './drapes.component';

describe('DrapesComponent', () => {
  let component: DrapesComponent;
  let fixture: ComponentFixture<DrapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrapesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
