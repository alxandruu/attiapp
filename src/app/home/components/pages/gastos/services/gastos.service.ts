import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GastosService {

  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/gastos`;
  public id_cat: number;

  constructor(private http: HttpClient) { }

  public getGastos() {
    return this.http.get<any>(this.baseUrl + '/gastos.php');
  }
  public addGasto(data) {
    return this.http.post(this.baseUrl + '/newgasto.php', { data });
  }
  
  public getCategories() {
    return this.http.get<any>(this.baseUrl + '/categorias.php');
  }

  public getAllGasto() {
    return this.http.get<any>(this.baseUrl + '/allgastos.php');
  }

}

