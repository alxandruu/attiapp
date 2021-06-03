import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from '../../empleados/services/empleado.service';
import { GastosService } from '../services/gastos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-gasto',
  templateUrl: './add-gasto.component.html',
  styleUrls: ['./add-gasto.component.scss']
})
export class AddGastoComponent implements OnInit {

  gastoForm: FormGroup;

  jobs: [];

  //title: String = 'Añadir Empleado';

  constructor(private fb: FormBuilder, private empleadoService: EmpleadoService, private gastoService: GastosService,private route: ActivatedRoute, private router: Router) {

    if (this.empleadoService.emp) {
      /*
      let emp = this.empleadoService.emp;
      this.title = `Editar Empleado | ${emp.name} ${emp.surname}`;
      this.gastoForm = this.fb.group({
        id: [emp.id],
        name: [emp.name, [Validators.required, Validators.minLength(2)]],
        surname: [emp.surname, [Validators.required, Validators.minLength(2)]],
        dni: [emp.dni, [Validators.required]],
        salary: [emp.salary, [Validators.required, Validators.min(0)]],
        telf: [emp.phone_number, [Validators.required, Validators.maxLength(9), Validators.minLength(9)]],
        position: [emp.position, [Validators.required]]
      });*/
    } else {
      this.gastoForm = this.fb.group({
        id: ['0'],
        name: ['', [Validators.required, Validators.minLength(2)]],
       date: ['', [Validators.required]],
        price: ['', [Validators.required]],
        categoria: ['', ]
      });
    }
    this.empleadoService.emp = null;
    this.getCats();
    
    
  }

  ngOnInit(): void {

    


  }

  public getCats(){
    this.gastoService.getGastos().subscribe(
      data=> {
       this.jobs=data;
      
      },
      error => {
        console.log("Hubo un error al extraer los puestos de trabajo");
      }

    );
  }
  public gastoSubmitForm() {
    if (this.gastoForm.valid) {
      this.gastoService.addGasto(this.gastoForm.value)
        .subscribe(
          data => {
            
            if (data[0] == true) {
              Swal.fire({
                title: data[1],
                icon: 'success',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Continuar'
              }).then((result) => {
                this.router.navigate(['/dashboard/gastos']);
              })
            } else {
              Swal.fire({
                title: "Revise el formulario",
                text: data[1],
                icon: 'error',
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false,
                confirmButtonText: 'Continuar'
              })
            }
           
          },
          error => {
            Swal.fire({
              title: "Ups! hubo un error inesperado",
              text: "Algo ha ido mal!",
              icon: 'error',
              allowOutsideClick: false,
              allowEscapeKey: false,
              allowEnterKey: false,
              confirmButtonText: 'Continuar'
            })
          }
        );
    } else {
      Swal.fire({
        title: "Revisa el formulario",
        text: "Los campos del formulario están mal rellenados",
        icon: 'error',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        confirmButtonText: 'Aceptar'
      })
    }
  }


  // FORM GETTERS
  get name() { return this.gastoForm.get('name') };
  get date() { return this.gastoForm.get('date') };
  get price() { return this.gastoForm.get('price') };
  get categoria() { return this.gastoForm.get('categoria') };
}