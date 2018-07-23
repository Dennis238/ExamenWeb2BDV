import {Component, Input, OnInit} from '@angular/core';
import {LibroService} from "../../Servicios/libro.service";

@Component({
  selector: 'app-cards-ingrediente',
  templateUrl: './cards-libro.component.html',
  styleUrls: ['./cards-libro.component.css']
})
export class CardsLibroComponent implements OnInit {

  listaIngredientes = [];
  numeroItems = 4;
  cantidadPaginas;
  listaAMostrar;
  paginaActual: number = 1;

  constructor(private _ingredienteService: LibroService) { }

  ngOnInit() {
    this._ingredienteService.getIngredientes().subscribe(
      (result: any[]) => {
        this.listaIngredientes = result;
        this.obtenerListaAMostrar();
        this.obtenerCantidadPaginas();
      }
    );
  }

  obtenerCantidadPaginas() {
    this.cantidadPaginas = this.listaIngredientes.length/this.numeroItems;
    if (!Number.isInteger(this.cantidadPaginas)) {
      this.cantidadPaginas = Number.parseInt(this.cantidadPaginas + 1);
    }
  }

  obtenerListaAMostrar() {
    this.listaAMostrar = this.listaIngredientes.slice(this.paginaActual*this.numeroItems - this.numeroItems, this.paginaActual*this.numeroItems)
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
