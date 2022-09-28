import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSecurityQuestionComponent } from './reg-security-question.component';

describe('RegSecurityQuestionComponent', () => {
  let component: RegSecurityQuestionComponent;
  let fixture: ComponentFixture<RegSecurityQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegSecurityQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegSecurityQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
