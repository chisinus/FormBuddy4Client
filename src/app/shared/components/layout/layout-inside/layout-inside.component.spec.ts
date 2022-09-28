import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutInsideComponent } from './layout-inside.component';

describe('LayoutInsideComponent', () => {
  let component: LayoutInsideComponent;
  let fixture: ComponentFixture<LayoutInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
