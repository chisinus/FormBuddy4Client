import { FormBuilder } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;

  beforeEach(async () => {
    component = new LoginComponent(new FormBuilder());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
