import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { TrabajadorComponent } from './trabajador/trabajador.component';

import { FormsModule } from '@angular/forms';
import { DadoComponent } from './dado/dado.component';
import { VistadadoComponent } from './vistadado/vistadado.component';
import { CronometroComponent } from './cronometro/cronometro.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

import { ElementosModule } from './elementos/elementos.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    AcercadeComponent,
    TrabajadorComponent,
    DadoComponent,
    VistadadoComponent,
    CronometroComponent,
    SelectornumericoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ElementosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
