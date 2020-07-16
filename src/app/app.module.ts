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
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    AboutComponent,
    FormacionComponent,
    CursosComponent,
    ExperienciaComponent,
    PageNotFoundComponent
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
