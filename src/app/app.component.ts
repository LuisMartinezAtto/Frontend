import { Component } from '@angular/core';
import {Data, Item} from './models/models'
import {CalcularService} from './services/calcular.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   datos: Data ={
    "inversionInicial":5000.0,
    "aportacionAnual": 3000.0,
    "incrementoAportacionAnual": 1.0,
    "anosInversion": 5.0,
    "rendimiento": 21.0
  };
  ganaciaInversion:number =0;
  montoFinal:number =0;
  tabla :Array<Item> =[];
  mensajeError:string ="";

  constructor(public calculaService:CalcularService){

  }

  public calcula (){
    this.calculaService.getCalculos(this.datos).subscribe(data => {
      if (data.error != undefined ){
           this.mensajeError =data.error;
           this.tabla =[];
      }else{
        this.ganaciaInversion= data.GananciaInversion;
        this.montoFinal=data.MontoFinal;
        this.tabla = data.CalculoInversion;
        this.mensajeError ="";
      }

      console.log(data);

    });
  }
}
