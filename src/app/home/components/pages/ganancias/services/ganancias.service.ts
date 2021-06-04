import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GananciasService {
  private baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/ganancias`;
  public id_cat: number;

  constructor(private http: HttpClient) {
  }

  public getGanancias() {
    return this.http.get<any>(this.baseUrl + '/ganancias.php');
  }

  public addGanancia(data) {
    return this.http.post(this.baseUrl + '/newganancia.php', { data });
  }
  public getCategories() {
    return this.http.get<any>(this.baseUrl + '/categorias.php');
  }
  public getAllGanancias() {
    return this.http.get<any>(this.baseUrl + '/allganancias.php');
  }
  public moreGanancias(data) {
    this.id_cat = data;
  }
  public deleteGanancia(id) {
    return this.http.post(this.baseUrl + '/delganancia.php', { id });
    
  }
}
