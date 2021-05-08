import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/empleados`;

  constructor(private http: HttpClient) { }

  public getEmpleados() {
    return this.http.get<any>(this.baseUrl + '/empleados.php');
  }
}
