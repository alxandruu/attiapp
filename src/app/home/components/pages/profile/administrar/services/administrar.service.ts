import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdministrarService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/admin`;

  constructor(private http: HttpClient) {

  }

  public getCategories() {
    return this.http.get<any>(this.baseUrl + '/categorias.php');
  }
  public newCategory(data) {
    return this.http.post(this.baseUrl + '/newcat.php', { data });
  }
  public delCategory(id){
    return this.http.post(this.baseUrl + '/delcat.php',{id});
  }
}
