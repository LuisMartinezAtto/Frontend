import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Data, DataReturn } from "../models/models";

@Injectable({
  providedIn: "root"
})
export class CalcularService {
  constructor(private http: HttpClient) {}

  getCalculos(datos:Data) {
    return this.http.post<DataReturn>("http://localhost:8001/calculaInversion",datos);
  }
}
