import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { PieComponent } from './shared/pie/pie.component';
import { AboutComponent } from './pages/about/about.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    AboutComponent,
    FormacionComponent,
    CursosComponent,
    ExperienciaComponent
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
