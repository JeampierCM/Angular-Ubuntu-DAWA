import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dado1Component } from './dado1/dado1.component';
import { JsonvistaComponent } from './jsonvista/jsonvista.component';
import { Json01Component } from './json01/json01.component';
import { Json02Component } from './json02/json02.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    Dado1Component,
    JsonvistaComponent,
    Json01Component,
    Json02Component
  ],
  exports: [
    Dado1Component
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  
})
export class ElementosModule { }
