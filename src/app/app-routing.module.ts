import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Lista de rutas de mi aplicación
const app_routes: Routes = [
    { path: 'inicio', component: AboutComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'conocimientos', component: CursosComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, 
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        //RouterModule.forRoot( app_routes, { useHash: true } )
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }