import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../Interfaces/usuario";
import {Libro} from "../../Interfaces/libro";
import {ActivatedRoute} from "@angular/router";
import {LibroService} from "../../Servicios/libro.service";
import {UsuarioService} from "../../Servicios/usuario.service";
import {AutorService} from "../../Servicios/autor.service";
import {Autor} from "../../Interfaces/autor";

@Component({
  selector: 'app-seleccion-transferencia',
  templateUrl: './seleccion-transferencia.component.html',
  styleUrls: ['./seleccion-transferencia.component.css'],
  providers: [LibroService, UsuarioService, AutorService]
})
export class SeleccionTransferenciaComponent implements OnInit {

  listaIngredientes = [];
  comidas: Autor;
  itemTransferencia: Libro;
  usuarioActual: Usuario;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _ingredienteService: LibroService,
    private _usuarioService: UsuarioService,
    private _comidaService: AutorService
  ) {
    this._activatedRoute.params.subscribe(
      params =>{
        this.getUsuarioActualPorId(params['idUsuarioActual']);
        this.getIngredientepoId(params['idIngrediente']);
        this.getComidadeUsuario(params['idUsuarioActual'])
      });
  }

  ngOnInit() {
  }

  getUsuarioActualPorId(idUsuario) {
    this._usuarioService.getUsuarioPorId(idUsuario).subscribe(
      (result: any) => {
        this.usuarioActual =  result[0];
      }
    )
  }
  getIngredientepoId(idIngrediente) {
    this._ingredienteService.getIngredientePorId(idIngrediente).subscribe(
      (result: any) => {
        this.itemTransferencia =  result[0];
        console.log(this.itemTransferencia);
      }
    )
  }
  getComidadeUsuario(idUsuario) {
    this._comidaService.getComidasporUsuario(idUsuario).subscribe(
      (result: any) => {
        this.comidas = result[0];
        this.getIngredientesdeComida(this.comidas.id);
      }
    )
  }
  getIngredientesdeComida(idComida) {
    this._ingredienteService.getIngredientePorComida(idComida).subscribe(
      (result: any[]) => {
        this.listaIngredientes = result;
      }
    )
  }
}
