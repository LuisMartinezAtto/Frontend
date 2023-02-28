export interface Data {
  inversionInicial: number,
  aportacionAnual: number,
  incrementoAportacionAnual: number,
  anosInversion: number,
  rendimiento: number
}

export interface Item {
  ano: number,
  saldoInicial: number,
  aportacion: number,
  rendimiento: number,
  saldoFinal: number
}


export interface DataReturn {
  error:string ,
  MontoFinal: number,
  GananciaInversion: number,
  CalculoInversion: Array<Item>,
}
