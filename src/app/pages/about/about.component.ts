import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
