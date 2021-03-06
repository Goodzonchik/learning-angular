import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { SpacexLogoComponent } from './header/spacex-logo/spacex-logo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BooleanLiteralModule } from './boolean-literal';
import { ListButtonComponent } from './list-button/list-button.component';
import { ListButtonDirective } from './list-button/list-button.directive';
import { RateComponent } from './rate/rate.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { LoaderComponent } from './loader/loader.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NumberFormatPipe } from './number-format.pipe';
import { HeadquartersPipe } from './headquarters/headquarters.pipe';
import { SelectComponent } from './select/select.component';

const angularModule = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  BooleanLiteralModule,
  FormsModule,
  ReactiveFormsModule,
];
const components = [
  HeaderComponent,
  GalleryComponent,
  ListButtonComponent,
  RateComponent,
  CheckboxComponent,
  LoaderComponent,
  BreadcrumbsComponent,
  SelectComponent,
];
const pipes = [HeadquartersPipe, NumberFormatPipe];
const localComponents = [SpacexLogoComponent];
const directive = [ListButtonDirective];

@NgModule({
  declarations: [...components, ...directive, ...localComponents, ...pipes],
  imports: [...angularModule],
  exports: [...angularModule, ...components, ...directive, ...pipes],
})
export class SharedModule {}
