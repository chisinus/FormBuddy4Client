import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegBasicInfoComponent } from './reg-basic-info.component';

describe('RegBasicInfoComponent', () => {
  let component: RegBasicInfoComponent;
  let fixture: ComponentFixture<RegBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegBasicInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
