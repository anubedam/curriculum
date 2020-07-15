import { Component } from '@angular/core';
import { DatosPaginaService } from './services/datos-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor( public datosPaginaService: DatosPaginaService ) {
  }

}
