import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraAccionComponent } from './componentes/barra-accion/barra-accion.component';
import { TituloComponent } from './componentes/titulo/titulo.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BarraAccionComponent,
    TituloComponent,
    SobreMiComponent,
    HabilidadesComponent,
    EducacionComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
