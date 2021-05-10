import { Component, OnInit } from '@angular/core';

import { Empleado } from 'src/app/_interfaces/empleados.interfaces';
import { EmpleadoService } from '../services/empleado.service';



@Component({
  selector: 'app-empleados-index',
  templateUrl: './empleados-index.component.html',
  styleUrls: ['./empleados-index.component.scss']
})
export class EmpleadosIndexComponent implements OnInit {
  public empleados: Empleado[] = [{
    id: null, name: null, surname: null, dni: null, salary: null, phone_number: null,
    position: null
  }];
  public page: number = 0;
  public buscar: string = '';
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  private getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      data => {

        this.empleados = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nextPage() {

    this.page += 8;
  }

  prevPage() {
    if (this.page > 0) {
      this.page -= 8;
    }
  }

  buscarEmpleado(buscar: string) {
    this.page = 0; //Para que al darle siguiente página no continue si no hay más paginas
    this.buscar = buscar;

  }
}
