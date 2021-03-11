import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  // Año a mostrar (Ever green)
  anio = new Date().getFullYear();

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
