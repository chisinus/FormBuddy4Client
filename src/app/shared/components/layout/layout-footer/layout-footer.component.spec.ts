import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from 'express';
import { LayoutFooterComponent } from './layout-footer.component';

// use testbed for routerlink tests
describe('LayoutFooterComponent', () => {
  let component: LayoutFooterComponent;
  let fixture: ComponentFixture<LayoutFooterComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutFooterComponent],
    });

    fixture = TestBed.createComponent(LayoutFooterComponent);
    component = fixture.componentInstance;
    // router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // https://stackoverflow.com/questions/43366742/how-to-test-routerlink-inside-button-tag-angular2
  // it('test routerlinks', () => {
  //   let htmlEl: HTMLElement = fixture.debugElement.nativeElement;

  //   let contactusLink = fixture.debugElement.query(By.css('#theid'));
  //   contactusLink.nativeElement.click();
  //   fixture.detectChanges();
  //   fixture.whenStable().then(
  //     () => {
  //         expect(location.path()).toBe(['/account/recovery', 'identification']);     // check if url is routed to identification page after back button is clicked
  //     }
  // );
});
