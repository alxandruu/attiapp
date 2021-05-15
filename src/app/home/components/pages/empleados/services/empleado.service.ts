import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  baseUrl: string = `${window.location.protocol}//${window.location.hostname}/attiapp/php/empleados`;

  constructor(private http: HttpClient) { }

  public getEmpleados() {
    return this.http.get<any>(this.baseUrl + '/empleados.php');
  }

  public addEmployee(data) {
    return this.http.post(this.baseUrl + '/newemployee.php', { data });
  }

  public delEmployee(id) {
    return this.http.post(this.baseUrl + '/delemployee.php', { id });
  }
}
