import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHiveShuttersComponent } from './blog-hive-shutters.component';

describe('BlogHiveShuttersComponent', () => {
  let component: BlogHiveShuttersComponent;
  let fixture: ComponentFixture<BlogHiveShuttersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHiveShuttersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogHiveShuttersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
