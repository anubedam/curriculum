import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';


@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
