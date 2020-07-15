import { Component, OnInit } from '@angular/core';
import { DatosPaginaService } from '../../services/datos-pagina.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public datosPaginaService: DatosPaginaService) { }

  ngOnInit(): void {
  }

}
