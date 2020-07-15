import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
