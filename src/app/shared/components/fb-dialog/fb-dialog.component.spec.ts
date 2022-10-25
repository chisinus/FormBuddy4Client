import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbDialogComponent } from './fb-dialog.component';

describe('FbDialogComponent', () => {
  let component: FbDialogComponent;
  let fixture: ComponentFixture<FbDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FbDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
