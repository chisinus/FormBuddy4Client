import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AngularMaterialModule } from '../angular-material.module';

const Components: any[] = [
  // FBNavigationBarComponent,
  BreadcrumbComponent,
];

const Modules: any[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AngularMaterialModule,
];

const Directives: any[] = [];

const Pipes: any[] = [];

@NgModule({
  declarations: [
    ...Components,
    ...Pipes,
    ...Directives,
    // FbNavigationbarComponent
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [...Modules, ...Components, ...Directives, ...Pipes],
})
export class SharedModule {}
