import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent} from './productos/productos.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { TrabajadorComponent} from './trabajador/trabajador.component';
import { DadoComponent} from './dado/dado.component';
import { VistadadoComponent } from './vistadado/vistadado.component';
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';
import { Dado1Component } from './elementos/dado1/dado1.component';
import { JsonvistaComponent } from './elementos/jsonvista/jsonvista.component';


const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'trabajador', component: TrabajadorComponent },
  { path: 'dado', component: DadoComponent },
  { path: 'vistadado', component: VistadadoComponent },
  { path: 'selectornumerico', component: SelectornumericoComponent },
  { path: 'dado1', component: Dado1Component },
  { path: 'jsonvista', component: JsonvistaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
