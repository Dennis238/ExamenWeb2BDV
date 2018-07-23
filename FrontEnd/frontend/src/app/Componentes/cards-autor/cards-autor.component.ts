import {Component, Input, OnInit} from '@angular/core';
import {AutorService} from "../../Servicios/autor.service";

@Component({
  selector: 'app-cards-comida',
  templateUrl: './cards-autor.component.html',
  styleUrls: ['./cards-autor.component.css']
})
export class CardsAutorComponent implements OnInit {

  listaComidas = [];
  numeroItems = 2;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _comidaService: AutorService) { }

  ngOnInit() {
    this._comidaService.getComidas().subscribe(
      (result: any[]) => {
        this.listaComidas = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaComidas.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaComidas.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
  }

  next() {
    this.paginaActual += 1;
    this.obtenerListaAMostrar()
  }
  prev() {
    this.paginaActual -= 1;
    this.obtenerListaAMostrar()
  }
}
