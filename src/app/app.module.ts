import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/misc/login/login.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';
import { LayoutFooterComponent } from '@shared/components/layout/layout-footer/layout-footer.component';
import { LayoutHeaderComponent } from '@shared/components/layout/layout-header/layout-header.component';
import { LayoutInsideComponent } from '@shared/components/layout/layout-inside/layout-inside.component';
import { LayoutOutsideComponent } from '@shared/components/layout/layout-outside/layout-outside.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutFooterComponent,
    LayoutHeaderComponent,
    LayoutInsideComponent,
    LayoutOutsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // ReactiveFormsModule,
    // FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
