import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FormacionComponent } from './pages/formacion/formacion.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { ExperienciaComponent } from './pages/experiencia/experiencia.component';

// Lista de rutas de mi aplicación
const app_routes: Routes = [
    { path: 'home', component: AboutComponent },
    { path: 'formacion', component: FormacionComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'experiencia', component: ExperienciaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
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