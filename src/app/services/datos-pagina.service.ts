import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DatosGeneral } from '../interfaces/datosGeneral.interface';
import { DatosFormacion } from '../interfaces/datosFormacion.interface';
import { DatosCursosWeb } from '../interfaces/datosCursosWeb.interface';
import { DatosTrabajo } from '../interfaces/datosTrabajo.interface';
import { DatosCurso } from '../interfaces/datosCurso.interface';

@Injectable({
  providedIn: 'root'
})
export class DatosPaginaService {

  generales: DatosGeneral;
  formaciones: DatosFormacion[];
  cursosWeb: DatosCursosWeb;
  trabajos: DatosTrabajo[];

  CRM: DatosCurso[];
  SO: DatosCurso[];
  ofimatica: DatosCurso[];
  idiomas: String[];
  tradicional: DatosCurso[];
  
  cargadoGeneral = false;
  cargadaFormacion = false;
  cargadoCursosWeb = false;
  cargadoTrabajos = false;

  cargadoCRM = false;
  cargadoSO = false;
  cargadoOfimatica = false;
  cargadoIdiomas = false;
  cargadoTradicional = false;

  constructor( private http: HttpClient) {
    // Mandamos llamar a las cargas de las tablas 
    this.cargarGeneral();
    this.cargarFormacion();
    this.cargarCursosWeb();
    this.cargarTrabajos();

    this.cargarCRM();
    this.cargarSO();
    this.cargarOfimatica();
    this.cargarIdiomas();
    this.cargarTradicional();
  }

  private cargarGeneral(){
    // Carga la información general de la persona
    this.http.get('https://curriculum-aum.firebaseio.com/generales.json')
        .subscribe( (resp: DatosGeneral) => {
        this.cargadoGeneral = true;
        this.generales = resp;
        });
  }

  private cargarFormacion(){
    // Carga la información de la formacion
    this.http.get('https://curriculum-aum.firebaseio.com/formacion.json')
        .subscribe( (resp: DatosFormacion[]) => {
        this.cargadaFormacion = true;
        this.formaciones = resp;
        });
  }

  private cargarCursosWeb(){
    // Carga la información de los cursos web
    this.http.get('https://curriculum-aum.firebaseio.com/cursos-web.json')
        .subscribe( (resp: DatosCursosWeb) => {
        this.cargadoCursosWeb = true;
        this.cursosWeb = resp;
        });
  }

  private cargarTrabajos(){
    // Carga la información de los trabajos
    this.http.get('https://curriculum-aum.firebaseio.com/trabajos.json')
        .subscribe( (resp: DatosTrabajo[]) => {
        this.cargadoTrabajos = true;
        this.trabajos = resp;
        });
  }

  private cargarCRM(){
    // Carga la información de los cursos de CRM
    this.http.get('https://curriculum-aum.firebaseio.com/CRM.json')
        .subscribe( (resp: DatosCurso[]) => {
        this.cargadoCRM = true;  
        this.CRM = resp;        
        });
  }

  private cargarSO(){
    // Carga la información de los cursos de SO y Hardware
    this.http.get('https://curriculum-aum.firebaseio.com/SO.json')
        .subscribe( (resp: DatosCurso[]) => {
        this.cargadoSO = true;
        this.SO = resp;
        });
  }

  private cargarOfimatica(){
    // Carga la información de los cursos de SO y Hardware
    this.http.get('https://curriculum-aum.firebaseio.com/ofimatica.json')
        .subscribe( (resp: DatosCurso[]) => {
        this.cargadoOfimatica = true;
        this.ofimatica = resp;
        });
  }

  private cargarIdiomas(){
    // Carga la información de los cursos de idiomas
    this.http.get('https://curriculum-aum.firebaseio.com/idiomas.json')
        .subscribe( (resp: String[]) => {
        this.cargadoIdiomas = true;
        this.idiomas = resp;
        });
  }

  private cargarTradicional(){
    // Carga la información de los cursos de programación tradicional
    this.http.get('https://curriculum-aum.firebaseio.com/tradicional.json')
        .subscribe( (resp: DatosCurso[]) => {
        this.cargadoTradicional = true;
        this.tradicional = resp;
        });
  }

}