import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

let mockBreadcrumbService: BreadcrumbService;

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;

  beforeEach(() => {
    mockBreadcrumbService = {} as BreadcrumbService;
    component = new BreadcrumbComponent(mockBreadcrumbService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
