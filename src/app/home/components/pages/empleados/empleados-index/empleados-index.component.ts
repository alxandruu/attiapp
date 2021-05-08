import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../services/empleado.service';


interface Empleado {
  id: number;
  name: string;
  surname: string;
  dni: string;
  salary: number;
  phone_number: number;
  position: string;

}

@Component({
  selector: 'app-empleados-index',
  templateUrl: './empleados-index.component.html',
  styleUrls: ['./empleados-index.component.scss']
})
export class EmpleadosIndexComponent implements OnInit {
  empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  private getEmpleados() {
    this.empleadoService.getEmpleados().subscribe(
      data => {
       
        this.empleados = data;
        console.log(this.empleados);
      },
      error => {
        console.log(error);
      }
    );
  }
}
