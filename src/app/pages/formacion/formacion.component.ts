import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent implements OnInit {

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
