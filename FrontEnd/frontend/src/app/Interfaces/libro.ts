export interface Libro {
  id: number,
  nombreLibro: string,
  cantidad: number,
  descripcionLibro: string,
  opcional: boolean,
  tipoLibro: string,
  venta: boolean,
  autorId: number
}
