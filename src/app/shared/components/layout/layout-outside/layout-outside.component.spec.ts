import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutOutsideComponent } from './layout-outside.component';

describe('LayoutOutsideComponent', () => {
  let component: LayoutOutsideComponent;
  let fixture: ComponentFixture<LayoutOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
